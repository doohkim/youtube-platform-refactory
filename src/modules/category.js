import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as categoryAPI from '../lib/api/channel';

const TOGGLE = 'category/TOGGLE';
const [GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE] =
    createRequestActionTypes('channel/GET_CATEGORY');

export const toggle = createAction(TOGGLE, (text, factory) => ({
    text,
    factory,
}));
export const getCategory = createAction(GET_CATEGORY);

const getCategorySaga = createRequestSaga(
    GET_CATEGORY,
    categoryAPI.filterCategory,
);

export function* categorySaga() {
    yield takeLatest(GET_CATEGORY, getCategorySaga);
}

const initialState = {
    filterCategories: null,
    filterCategoriesError: null,
};

const category = handleActions(
    {
        [TOGGLE]: (state, { payload: { text, factory } }) =>
            factory.id === 1
                ? {
                      ...state,
                      filterCategories: state.filterCategories.map((category) =>
                          category.text === text
                              ? {
                                    ...category,
                                    types: category.types.map((type) =>
                                        type.id === 1
                                            ? { ...type, done: true }
                                            : { ...type, done: false },
                                    ),
                                }
                              : category,
                      ),
                  }
                : {
                      ...state,
                      filterCategories: state.filterCategories.map((category) =>
                          category.text === text
                              ? {
                                    ...category,
                                    types: category.types.map((type) =>
                                        type.id === factory.id
                                            ? { ...type, done: !type.done }
                                            : type.id === 1
                                            ? { ...type, done: false }
                                            : type,
                                    ),
                                }
                              : category,
                      ),
                  },
        [GET_CATEGORY_SUCCESS]: (state, action) => ({
            ...state,
            filterCategories: action.payload,
        }),
        [GET_CATEGORY_FAILURE]: (state, action) => ({
            ...state,
            filterCategoriesError: action.payload,
        }),
    },
    initialState,
);

export default category;
