import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as addressAPI from '../lib/api/address';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

const [CREATE_ADDRESS, CREATE_ADDRESS_SUCCESS, CREATE_ADDRESS_FAILURE] =
    createRequestActionTypes('address/CREATE_ADDRESS');

export const createAddress = createAction(CREATE_ADDRESS, (address) => address);

const createAddressSaga = createRequestSaga(
    CREATE_ADDRESS,
    addressAPI.createAddress,
);

export function* addressSaga() {
    yield takeLatest(CREATE_ADDRESS, createAddressSaga);
}

const initialState = {
    address: null,
    addressError: null,
};

const address = handleActions(
    {
        [CREATE_ADDRESS_SUCCESS]: (state, { payload: address }) => ({
            ...state,
            address,
        }),
        [CREATE_ADDRESS_FAILURE]: (state, { payload: addressError }) => ({
            ...state,
            addressError,
        }),
    },
    initialState,
);
export default address;
