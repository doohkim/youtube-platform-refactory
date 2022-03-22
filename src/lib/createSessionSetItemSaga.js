import { put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createSessionSetItemSaga(type) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type));

        try {
            
            sessionStorage.setItem(
                type.split('/')[0],
                JSON.stringify(action.payload),
            );
            const data = JSON.parse(sessionStorage.getItem(type.split('/')[0]));
            
            yield put({
                type: SUCCESS,
                payload: data,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type));
    };
}
