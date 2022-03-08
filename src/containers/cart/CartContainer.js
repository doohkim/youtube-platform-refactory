import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartComponent from '../../components/cart/CartComponent'
import { getCart } from '../../modules/cart'

const CartContainer = () => {

    const dispatch = useDispatch()
    const { cartData, cartError, loading, user } = useSelector(
        ({ cart, loading, user}) => ({
            cartData: cart.cartData,
            cartError: cart.cartError,
            loading : loading['cart/GET_CART'],
            user: user.user
        })
    )

    useEffect(() => {
        dispatch(getCart())
    },[dispatch])

    return <CartComponent 
        cartData={cartData}
        cartError={cartError}
        loading={loading}
        user={user}

    />
}
export default CartContainer