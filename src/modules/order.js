import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import createSessionFilterSaga from '../lib/createSessionFilterSaga';
import * as orderAPI from '../lib/api/order';

const [GET_CART_FILTER, GET_CART_FILTER_SUCCESS, GET_CART_FILTER_FAILURE] =
    createRequestActionTypes('order/GET_CART_FILTER');

const [CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE] =
    createRequestActionTypes('order/CREATE_ORDER');

const [GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILURE] =
    createRequestActionTypes('order/GET_ORDER');

const [SELECTED_ADDRESS, SELECTED_ADDRESS_SUCCESS, SELECTED_ADDRESS_FAILURE] = 
    createRequestActionTypes('order/SELECTED_ADDRESS')

const PAYMENT_FAILURE = 'order/PAYMENT_FAILURE';
const UNLOAD_PAYMENT_ORDER = 'order/UNLOAD_PAYMENT_ORDER';


export const getCartFilter = createAction(GET_CART_FILTER);
export const createOrder = createAction(CREATE_ORDER, ({ response }) => ({
    response,
}));

export const getOrder = createAction(GET_ORDER, (id) => id);
export const notSuccessedPayment = createAction(
    PAYMENT_FAILURE,
    ({ response }) => ({ response }),
);
export const unloadPaymentOrder = createAction(UNLOAD_PAYMENT_ORDER);
export const getSelectedAddress = createAction(SELECTED_ADDRESS)


const getCartFilterSaga = createSessionFilterSaga(GET_CART_FILTER);
const createOrderSaga = createRequestSaga(CREATE_ORDER, orderAPI.createOrder);
const getOrderSaga = createRequestSaga(GET_ORDER, orderAPI.getOrder);
const selectedAddressSaga = createRequestSaga(SELECTED_ADDRESS, orderAPI.selectedAddress)
export function* orderSaga() {
    yield takeLatest(GET_CART_FILTER, getCartFilterSaga);
    yield takeLatest(CREATE_ORDER, createOrderSaga);
    yield takeLatest(GET_ORDER, getOrderSaga);
    yield takeLatest(SELECTED_ADDRESS, selectedAddressSaga)
}

const initialState = {
    order: null,
    orderError: null,
    payedOrder: null,
    payedOrderError: null,
    selectedAddress:null,
    selectedAddressError: null,
};

const order = handleActions(
    {
        [GET_CART_FILTER_SUCCESS]: (state, { payload: order }) => ({
            ...state,
            order,
        }),
        [GET_CART_FILTER_FAILURE]: (state, { payload: orderError }) => ({
            ...state,
            orderError,
        }),
        [CREATE_ORDER_SUCCESS]: (state, { payload: payedOrder }) => ({
            ...state,
            payedOrder,
        }),
        [CREATE_ORDER_FAILURE]: (state, { payload: payedOrderError }) => ({
            ...state,
            payedOrderError,
        }),
        [GET_ORDER_SUCCESS]: (state, { payload: payedOrder }) => ({
            ...state,
            payedOrder,
        }),
        [GET_ORDER_FAILURE]: (state, { payload: payedOrderError }) => ({
            ...state,
            payedOrderError,
        }),
        [PAYMENT_FAILURE]: (state, { payload: payedOrderError }) => ({
            ...state,
            payedOrderError,
        }),
        [SELECTED_ADDRESS_SUCCESS]: (state, {payload: selectedAddress}) => ({
            ...state,
            selectedAddress
        }),
        [SELECTED_ADDRESS_FAILURE]: (state, {payload: selectedAddressError}) => ({
            ...state,
            selectedAddressError
        }),
        [UNLOAD_PAYMENT_ORDER]: () => initialState,
    },
    initialState,
);
export default order;
