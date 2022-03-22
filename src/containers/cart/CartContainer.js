import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComponent from '../../components/cart/CartComponent';
import { createAddress , readAddress, setAddress} from '../../modules/address';
import {
    decrease,
    getCart,
    increase,
    remove,
    toggle,
} from '../../modules/cart';

const CartContainer = () => {
    const dispatch = useDispatch();
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
    }));

    const onAddressCreate = useCallback(
        (address) => {
            dispatch(createAddress(address));
        },
        [dispatch],
    );

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if(token){
            dispatch(readAddress())
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
            increase={increase}
            decrease={decrease}
            toggle={toggle}
            remove={remove}
        />
    );
};
export default CartContainer;
