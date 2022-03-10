import { put} from 'redux-saga/effects';
import { startLoading, finishLoading} from '../modules/loading'

export default function createSessionSaga(type) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* () {
        yield put(startLoading(type));

        try{
            const cartdata = JSON.parse(sessionStorage.getItem('cart'));
            console.log(
                'get cart reducer , export session data'
            )
            yield put({
                type: SUCCESS,
                payload: cartdata,
            })

        }catch(e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            })
        }
        yield put(finishLoading(type))
    }
}