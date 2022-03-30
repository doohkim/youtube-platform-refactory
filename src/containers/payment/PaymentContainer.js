import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '../../../node_modules/react-router/index';
import PaymentComponent from '../../components/payment/PaymentComponent';
import { createOrder, getSelectedAddress } from '../../modules/order';

const PaymentContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        order,
        orderError,
        getCartLoading,
        user,
        selectedAddress,
        selectedAddressError,
        selectedAddressLoading,
    } = useSelector(({ order, loading, user, address }) => ({
        order: order.order,
        orderError: order.orderError,
        getCartLoading: loading['order/GET_CART_FILTER'],
        createOrderLoading: loading['order/CREATE_ORDER'],
        user: user.user,
        selectedAddress: address.selectedAddress,
        selectedAddressError: address.selectedAddressError,
        selectedAddressLoading: loading['order/SELECTED_ADDRESS'],
    }));

    // const onDisabledClick = useCallback(() => {
    //     window.alert('결제 진행을 위해 결제 진행 필수 동의에 체크해주세요');
    // });
    const getTotalAmount = useCallback((cartItems) => {
        let acc = 0;
        if (cartItems.length === 0) return 0;
        else {
            cartItems.map((item) => {
                acc = acc + item.price * item.number;
            });
            return acc;
        }
    }, []);

    const onClick = useCallback((order) => {
        const order_items = JSON.stringify(order);
        const ordered_amount = getTotalAmount(order);
        const address = sessionStorage.getItem('address');
        console.log(address);
        const { IMP } = window;
        IMP.init('imp63703486');
        
        const data = {
            pg: 'html_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: order_items,
            amount: ordered_amount,
            custom_data: {
                name: '부가정보',
                desc: '세부 부가 정보',
            },
            buyer_name: user.user.username,
            buyer_tel: '01040116804',
            buyer_email: user.user.email,
            buyer_addr: address,
            buyer_postalcode: '우편번호',
        };
        IMP.request_pay(data, callback);
    });
    const callback = (response) => {
        console.log(response);
        if (response.success) {
            alert('결제 성공');
            dispatch(createOrder({ response }));
            const cartData = JSON.parse(sessionStorage.getItem('cart')).filter(
                (cart_item) => cart_item.checked === false,
            );
            console.log(cartData, '결제 후 필터링 데이터');
            sessionStorage.setItem('cart', JSON.stringify(cartData));
        } else {
            const errorMessage = response.error_msg;
            console.log('결제 실패', errorMessage);
            alert(`결제 실패 : ${errorMessage}`);
            navigate('/order');
        }
    };
    useEffect(() => {
        dispatch(getSelectedAddress())
    },[dispatch]);

    return <PaymentComponent 
    selectedAddress={selectedAddress}
    selectedAddressError={selectedAddressError}
    selectedAddressLoading={selectedAddressLoading}


    />;
};
export default PaymentContainer;
