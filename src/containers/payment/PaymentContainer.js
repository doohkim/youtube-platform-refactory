import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '../../../node_modules/react-router/index';
import PaymentComponent from '../../components/payment/PaymentComponent';
import { getSelectedCart } from '../../modules/cart';
import { createOrder, getSelectedAddress } from '../../modules/order';

const PaymentContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        cartFilterData,
        cartFilterError,
        cartFilterLoading,
        order,
        orderError,
        getCartLoading,
        user,
        selectedAddress,
        selectedAddressError,
        selectedAddressLoading,
    } = useSelector(({ order, loading, user, cart }) => ({
        order: order.order,
        orderError: order.orderError,
        getCartLoading: loading['order/GET_CART_FILTER'],
        createOrderLoading: loading['order/CREATE_ORDER'],
        user: user.user,
        selectedAddress: order.selectedAddress,
        selectedAddressError: order.selectedAddressError,
        selectedAddressLoading: loading['order/SELECTED_ADDRESS'],
        cartFilterData: cart.cartFilterData,
        cartFilterError: cart.cartFilterError,
        cartFilterLoading: loading['cart/GET_SELECTED_CART'],
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
            if(acc < 40000){
                acc = acc + 3000
            }
            return acc;
        }
    }, []);

    const onClick = useCallback((order) => {
        console.log(order)
        const itemName= `${order.length> 1 ? `${order[0].text.split(']')[1]} 외 ${order.length-1} 개 상품` : `${order[0].text} 상품`}`
        const order_items = JSON.stringify(itemName);
        const ordered_amount = getTotalAmount(order);
        const { IMP } = window;
        IMP.init('imp63703486');

        if (selectedAddress) {
            const { address, phone_number } = selectedAddress.results[0];
            console.log(new Date().getTime(), 'ddddddd')
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
                buyer_tel: phone_number,
                buyer_email: user.user.email,
                buyer_addr: address,
                buyer_postalcode: '우편번호',
            };
            
            IMP.request_pay(data, callback);
        }


    },[]);
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
            navigate('/order');
        } else {
            const errorMessage = response.error_msg;
            console.log('결제 실패', errorMessage);
            alert(`결제 실패 : ${errorMessage}`);
            navigate('/order');
        }
    };
    useEffect(() => {
        if(user){
            dispatch(getSelectedAddress());
            dispatch(getSelectedCart());
        }else{
            navigate('/login')
        }
        const jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, [dispatch, user]);

    return (
        <PaymentComponent
            selectedAddress={selectedAddress}
            selectedAddressError={selectedAddressError}
            selectedAddressLoading={selectedAddressLoading}
            cartFilterData={cartFilterData}
            cartFilterError={cartFilterError}
            cartFilterLoading={cartFilterLoading}
            getTotalAmount={getTotalAmount}
            onClick={onClick}
            
        />
    );
};
export default PaymentContainer;
