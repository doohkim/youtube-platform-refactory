import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import category, { categorySaga } from './category';
import channel, { channelListSaga } from './channel';
import video, { videoListSaga } from './video';
const rootReducer = combineReducers({
    auth,
    loading,
    user,
    category,
    channel,
    video,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        categorySaga(),
        channelListSaga(),
        videoListSaga(),
    ]);
}

export default rootReducer;
