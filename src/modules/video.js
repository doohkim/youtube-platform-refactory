import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as videoAPI from '../lib/api/video';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

const [GET_VIDEO_LIST, GET_VIDEO_LIST_SUCCESS, GET_VIDEO_LIST_FAILURE] =
    createRequestActionTypes('video/GET_VIDEO_LIST');
const [READ_VIDEO, READ_VIDEO_SUCCESS, READ_VIDEO_FAILURE] =
    createRequestActionTypes('video/READ_VIDEO');
const UNLOAD_VIDEO = 'video/UNLOAD_VIDEO';

export const getListVideos = createAction(
    GET_VIDEO_LIST,
    (filter_data, page, sort) => ({
        filter_data,
        page,
        sort,
    }),
);

export const readVideo = createAction(READ_VIDEO, (id) => id);
export const unloadVideo = createAction(UNLOAD_VIDEO);

const getVideoListSaga = createRequestSaga(
    GET_VIDEO_LIST,
    videoAPI.filterVideo,
);

const readVideoSaga = createRequestSaga(READ_VIDEO, videoAPI.getVideoAnalysis);

export function* videoListSaga() {
    yield takeLatest(GET_VIDEO_LIST, getVideoListSaga);
    yield takeLatest(READ_VIDEO, readVideoSaga);
}

const initialState = {
    videoList: null,
    videoListError: null,
    videoDetail: null,
    videoDetailError: null,
    sortNumber: 0,
};

const video = handleActions(
    {
        [GET_VIDEO_LIST_SUCCESS]: (state, action) => ({
            ...state,
            videoList: action.payload,
        }),
        [GET_VIDEO_LIST_FAILURE]: (state, action) => ({
            ...state,
            videoListError: action.payload,
        }),
        [READ_VIDEO_SUCCESS]: (state, action) => ({
            ...state,
            videoDetail: action.payload,
        }),
        [READ_VIDEO_FAILURE]: (state, action) => ({
            ...state,
            videoDetailError: action.payload,
        }),
        [UNLOAD_VIDEO]: () => initialState,
    },
    initialState,
);
export default video;
