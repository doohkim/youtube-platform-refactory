import React, {  useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComponent from '../../components/cart/CartComponent';
import { createAddress } from '../../modules/address';
import { decrease, getCart, increase, remove, toggle } from '../../modules/cart';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartData, cartError, loading, user,addressLoading } = useSelector(
        ({ cart, loading, user }) => ({
            cartData: cart.cartData,
            cartError: cart.cartError,
            loading: loading['cart/GET_CART'],
            addressLoading: loading['address/CREATE_ADDRESS'],
            user: user.user,
        }),
    );
    const onAddressCreate = useCallback((address) => {
        dispatch(createAddress(address))
    },[dispatch])

    useEffect(() => {
        
        dispatch(getCart());
    }, [dispatch]);

    return (
        <CartComponent
            cartData={cartData}
            cartError={cartError}
            loading={loading}
            user={user}
            addressLoading={addressLoading}
            onAddressCreate={onAddressCreate}
            increase={increase}
            decrease={decrease}
            toggle={toggle}
            remove={remove}
        />
    );
};
export default CartContainer;
