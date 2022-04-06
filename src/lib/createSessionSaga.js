import { put} from 'redux-saga/effects';
import { startLoading, finishLoading} from '../modules/loading'

export default function createSessionSaga(type) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* () {
        yield put(startLoading(type));
        try{
            const data = JSON.parse(sessionStorage.getItem(type.split('/')[0]));
            yield put({
                type: SUCCESS,
                payload: data,
            })
        }catch(e) {
            console.log(e)
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            })
        }
        yield put(finishLoading(type))
    }
}