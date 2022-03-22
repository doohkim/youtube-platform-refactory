import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as addressAPI from '../lib/api/address';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import createSessionSaga from '../lib/createSessionSaga';
import createSessionSetItemSaga from '../lib/createSessionSetItemSaga';

const [CREATE_ADDRESS, CREATE_ADDRESS_SUCCESS, CREATE_ADDRESS_FAILURE] =
    createRequestActionTypes('address/CREATE_ADDRESS');

const [READ_ADDRESS, READ_ADDRESS_SUCCESS, READ_ADDRESS_FAILURE] = 
    createRequestActionTypes('address/READ_ADDRESS');

const [GET_ADDRESS, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE] =
    createRequestActionTypes('address/GET_ADDRESS')
const [SET_ADDRESS, SET_ADDRESS_SUCCESS, SET_ADDRESS_FAILURE] = 
    createRequestActionTypes('address/SET_ADDRESS')

export const createAddress = createAction(CREATE_ADDRESS, (address) => address);
export const readAddress = createAction(READ_ADDRESS)
export const getAddress = createAction(GET_ADDRESS)
export const setAddress = createAction(SET_ADDRESS, (address) => address)

const createAddressSaga = createRequestSaga(
    CREATE_ADDRESS,
    addressAPI.createAddress,
);
const readAddressSaga = createRequestSaga(
    READ_ADDRESS,
    addressAPI.readAddress
)
const getAddressListSaga = createSessionSaga(GET_ADDRESS)
const setAddressSaga = createSessionSetItemSaga(SET_ADDRESS)



export function* addressSaga() {
    yield takeLatest(CREATE_ADDRESS, createAddressSaga);
    yield takeLatest(READ_ADDRESS, readAddressSaga);
    yield takeLatest(GET_ADDRESS, getAddressListSaga);
    yield takeLatest(SET_ADDRESS, setAddressSaga)
}

const initialState = {
    address: null,
    addressError: null,
    addressList: null,
    addressListError: null,
    sessionAddressList: null,
    sessionAddressError: null,
};

const address = handleActions(
    {
        [CREATE_ADDRESS_SUCCESS]: (state, { payload: address }) => ({
            ...state,
            address,
        }),
        [CREATE_ADDRESS_FAILURE]: (state, { payload: addressError }) => ({
            ...state,
            addressError: addressError,
        }),
        [READ_ADDRESS_SUCCESS]: (state, { payload: addressList }) => ({
            ...state,
            addressList,
        }),
        [READ_ADDRESS_FAILURE]: (state, { payload: addressListError }) => ({
            ...state,
            addressListError: addressListError,
        }),
        [GET_ADDRESS_SUCCESS]: (state, { payload: sessionAddressList}) => ({
            ...state,
            sessionAddressList
        }),
        [GET_ADDRESS_FAILURE]: (state, { payload: sessionAddressError }) => ({
            ...state,
            sessionAddressError: sessionAddressError
        }),
        [SET_ADDRESS_SUCCESS]: (state, { payload: sessionAddressList}) => ({
            ...state,
            sessionAddressList
        }),
        [SET_ADDRESS_FAILURE]: (state, { payload: sessionAddressError }) => ({
            ...state,
            sessionAddressError: sessionAddressError
        })
    },
    initialState,
);
export default address;
