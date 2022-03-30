import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CartComponent from '../../components/cart/CartComponent';
// import { updateAddress } from '../../lib/api/address';
import {
    changeField,
    createAddress,
    getAddressDetail,
    readAddress,
    updateAddressDetail,
    removeAddress,
    updateAddress,
} from '../../modules/address';
import {
    decrease,
    getCart,
    increase,
    remove,
    toggle,
} from '../../modules/cart';

const CartContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        cartData,
        cartError,
        loading,
        user,
        addresscreateLoading,
        address,
        addressList,
        addressError,
        addressListError,
        detailAddress,
        detailAddressError,
        receiveName,
        phoneNumber,
    } = useSelector(({ cart, loading, user, address }) => ({
        cartData: cart.cartData,
        cartError: cart.cartError,
        loading: loading['cart/GET_CART'],
        address: address.address,
        addressList: address.addressList,
        addressError: address.addressError,
        addressListError: address.addressError,
        addresscreateLoading: loading['address/CREATE_ADDRESS'],
        user: user.user,
        detailAddress: address.detailAddress,
        detailAddressError: address.detailAddressError,
        receiveName: address.receiveName,
        phoneNumber: address.phoneNumber,
    }));

    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch],
    );
    const onAddressCreate = useCallback(
        (address) => {
            dispatch(createAddress(address));
        },
        [dispatch],
    );
    const onGetAddressRetrieve = useCallback(
        (id) => {
            dispatch(getAddressDetail(id));
        },
        [dispatch],
    );
    const onDetailAddressClick = useCallback(
        ({ id, receiveName, phoneNumber, default_address }) => {
            dispatch(
                updateAddressDetail({
                    id,
                    receiveName,
                    phoneNumber,
                    default_address,
                }),
            );
        },
        [dispatch],
    );
    const onSelectedAddress = useCallback(
        (addr) => {
            try {
                const { id } = addr;
                const selected_address = true;
                dispatch(updateAddress({ id, selected_address }));
            } catch (e) {
                console.log(e);
            }
            navigate(0);
        },
        [dispatch, navigate],
    );
    const onRemoveAddress = useCallback(
        (id) => {
            try {
                dispatch(removeAddress(id));
            } catch (e) {
                console.log(e);
            }
            navigate(0);
        },
        [dispatch],
    );

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            dispatch(readAddress());
        }
        dispatch(getCart());
    }, [dispatch]);

    return (
        <CartComponent
            cartData={cartData}
            cartError={cartError}
            loading={loading}
            user={user}
            addressList={addressList}
            addressListError={addressListError}
            addresscreateLoading={addresscreateLoading}
            onAddressCreate={onAddressCreate}
            onSelectedAddress={onSelectedAddress}
            onChangeField={onChangeField}
            increase={increase}
            decrease={decrease}
            toggle={toggle}
            remove={remove}
            phoneNumber={phoneNumber}
            receiveName={receiveName}
            detailAddress={detailAddress}
            detailAddressError={detailAddressError}
            onDetailAddressClick={onDetailAddressClick}
            onGetAddressRetrieve={onGetAddressRetrieve}
            onRemoveAddress={onRemoveAddress}
        />
    );
};
export default CartContainer;
