import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

const [GET_POST_LIST, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE] =
    createRequestActionTypes('posts/GET_POST_LIST');
const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
    createRequestActionTypes('posts/READ_POST');
const UNLOAD_POST = 'posts/UNLOAD_POST';

export const getListPost = createAction(GET_POST_LIST, (page, sort) => ({
    page,
    sort,
}));
export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const getPostListSaga = createRequestSaga(GET_POST_LIST, postsAPI.getPosts);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readDetailPost);

export function* postListSaga() {
    yield takeLatest(GET_POST_LIST, getPostListSaga);
    yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
    postList: null,
    postListError: null,
    postDetail: null,
    postDetailError: null,
};

const posts = handleActions(
    {
        [GET_POST_LIST_SUCCESS]: (state, action) => ({
            ...state,
            postList: action.payload,
        }),
        [GET_POST_LIST_FAILURE]: (state, action) => ({
            ...state,
            postListError: action.payload,
        }),
        [READ_POST_SUCCESS]: (state, action) => ({
            ...state,
            postDetail: action.payload,
        }),
        [READ_POST_FAILURE]: (state, action) => ({
            ...state,
            postDetailError: action.payload,
        }),
        [UNLOAD_POST]: () => initialState,
    },
    initialState,
);

export default posts;
