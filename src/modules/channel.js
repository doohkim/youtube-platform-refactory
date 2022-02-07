import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as channelAPI from '../lib/api/channel';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

const [GET_CHANNEL_LIST, GET_CHANNEL_LIST_SUCCESS, GET_CHANNEL_LIST_FAILURE] =
    createRequestActionTypes('channel/GET_CHANNEL_LIST');
const [READ_CHANNEL, READ_CHANNEL_SUCCESS, READ_CHANNEL_FAILURE] =
    createRequestActionTypes('channel/READ_CHANNEL');
const UNLOAD_CHANNEL = 'channel/UNLOAD_CHANNEL';
export const getListChannels = createAction(
    GET_CHANNEL_LIST,
    (filter_data, page, sort) => ({
        filter_data,
        page,
        sort,
    }),
);
export const readChannel = createAction(READ_CHANNEL, (id) => id);
export const unloadChannel = createAction(UNLOAD_CHANNEL);

const getChannelListSaga = createRequestSaga(
    GET_CHANNEL_LIST,
    channelAPI.getChannelList,
);
const readChannelSaga = createRequestSaga(
    READ_CHANNEL,
    channelAPI.getChannelAnalysis,
);

export function* channelListSaga() {
    yield takeLatest(GET_CHANNEL_LIST, getChannelListSaga);
    yield takeLatest(READ_CHANNEL, readChannelSaga);
}

const initialState = {
    channelList: null,
    channelListError: null,
    channelDetail: null,
    channelDetailError: null,
    isCertificated: false,
    sortNumber: 0,
};

const channel = handleActions(
    {
        [GET_CHANNEL_LIST_SUCCESS]: (state, action) => ({
            ...state,
            channelList: action.payload,
        }),
        [GET_CHANNEL_LIST_FAILURE]: (state, action) => ({
            ...state,
            channelListError: action.payload,
        }),
        [READ_CHANNEL_SUCCESS]: (state, action) => ({
            ...state,
            channelDetail: action.payload,
        }),
        [READ_CHANNEL_FAILURE]: (state, action) => ({
            ...state,
            channelDetailError: action.payload,
        }),
        [UNLOAD_CHANNEL]: () => initialState,
    },
    initialState,
);

export default channel;
