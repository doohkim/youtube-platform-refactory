import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import createSessionSaga from '../lib/createSessionSaga';
import createSessionSetItemSaga from '../lib/createSessionSetItemSaga';
import createSessionFilterSaga from '../lib/createSessionFilterSaga';

const [GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE] =
    createRequestActionTypes('cart/GET_CART');
const [SET_CART, SET_CART_SUCCESS, SET_CART_FAILURE] =
    createRequestActionTypes('cart/SET_CART');
const [GET_SELECTED_CART, GET_SELECTED_CART_SUCCESS, GET_SELECTED_CART_FAILURE] =
    createRequestActionTypes('cart/GET_SELECTED_CART')

const TOGGLE = 'cart/TOGGLE';
const REMOVE = 'cart/REMOVE';
const INCREASE = 'cart/INCREASE';
const DECREASE = 'cart/DECREASE';

export const getSelectedCart = createAction(GET_SELECTED_CART);
export const getCart = createAction(GET_CART);
export const setCart = createAction(SET_CART, (cartData) => cartData);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
export const increase = createAction(INCREASE, (id) => id);
export const decrease = createAction(DECREASE, (id) => id);

const getSelectedCartSaga = createSessionFilterSaga(GET_SELECTED_CART)
const getCartListSaga = createSessionSaga(GET_CART);
// const setCartSaga = createSessionSaga(SET_CART);
const setCartSaga = createSessionSetItemSaga(SET_CART);

export function* getCartSaga() {
    yield takeLatest(GET_SELECTED_CART, getSelectedCartSaga);
    yield takeLatest(GET_CART, getCartListSaga);
    yield takeLatest(SET_CART, setCartSaga);
}

const initialState = {
    cartData: null,
    cartError: null,
    cartFilterData: null,
    cartFilterError: null,
};

const cart = handleActions(
    {
        // [GET_CART]: (state, { payload: cartData }) => ({
        //     ...state,
        //     cartData,
        // }),
        [GET_SELECTED_CART_SUCCESS]: (state, { payload: cartFilterData }) => ({
            ...state,
            cartFilterData,
        }),
        [GET_SELECTED_CART_FAILURE]: (state, { payload: cartFilterError }) => ({
            ...state,
            cartFilterError: cartFilterError,
        }),
        [GET_CART_SUCCESS]: (state, { payload: cartData }) => ({
            ...state,
            cartData,
        }),
        [GET_CART_FAILURE]: (state, { payload: cartError }) => ({
            ...state,
            cartError: cartError,
        }),
        [SET_CART_SUCCESS]: (state, { payload: cartData }) => ({
            ...state,
            cartData,
        }),
        [SET_CART_FAILURE]: (state, { payload: cartError }) => ({
            ...state,
            cartError: cartError,
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            cartData: state.cartData.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, checked: !cartItem.checked }
                    : cartItem,
            ),
        }),
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            cartData: state.cartData.filter((cartItem) => cartItem.id !== id),
        }),
        [INCREASE]: (state, { payload: id }) => ({
            ...state,
            cartData: state.cartData.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, number: cartItem.number + 1 }
                    : cartItem,
            ),
        }),
        [DECREASE]: (state, { payload: id }) => ({
            ...state,
            cartData: state.cartData.map((cartItem) => {
                if (cartItem.id === id) {
                    if (cartItem.number === 1) {
                        return { ...cartItem, number: 1 };
                    } else {
                        return { ...cartItem, number: cartItem.number - 1 };
                    }
                } else {
                    return cartItem;
                }
            }),
        }),
    },
    initialState,
);

export default cart