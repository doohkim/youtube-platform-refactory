import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as categoryAPI from '../lib/api/channel';

const TOGGLE = 'category/TOGGLE';
const [GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE] =
    createRequestActionTypes('category/GET_CATEGORY');
const UNLOAD_CATEGORY = 'category/UNLOAD_CATEGORY';

export const toggle = createAction(TOGGLE, (text, factory) => ({
    text,
    factory,
}));
export const getCategory = createAction(GET_CATEGORY);
export const unloadCategory = createAction(UNLOAD_CATEGORY);

const getCategorySaga = createRequestSaga(
    GET_CATEGORY,
    categoryAPI.filterCategory,
);

export function* categorySaga() {
    yield takeLatest(GET_CATEGORY, getCategorySaga);
}

const initialState = {
    filterCategories: [
        {
            id: 1,
            text: '국가',
            types: [
                {
                    id: 1,
                    factory: '전체',
                    done: true,
                },
                {
                    id: 2,
                    factory: '태국',
                    done: false,
                },
                {
                    id: 3,
                    factory: '인도네시아',
                    done: false,
                },
                {
                    id: 4,
                    factory: '대만',
                    done: false,
                },
                {
                    id: 5,
                    factory: '일본',
                    done: false,
                },
                {
                    id: 6,
                    factory: '미국',
                    done: false,
                },
            ],
        },
        {
            id: 2,
            text: '카테고리',
            types: [
                {
                    id: 1,
                    factory: '카테고리전체',
                    done: true,
                },
                {
                    id: 2,
                    factory: '패션',
                    done: false,
                },
                {
                    id: 3,
                    factory: '뷰티',
                    done: false,
                },
                {
                    id: 4,
                    factory: '푸드/먹방',
                    done: false,
                },
                {
                    id: 5,
                    factory: '엔터테인먼트',
                    done: false,
                },
                {
                    id: 6,
                    factory: 'Vlog/일상',
                    done: false,
                },
                {
                    id: 7,
                    factory: '여행',
                    done: false,
                },
                {
                    id: 8,
                    factory: 'ASMR',
                    done: false,
                },
                {
                    id: 9,
                    factory: '게임',
                    done: false,
                },
                {
                    id: 10,
                    factory: '펫/동물',
                    done: false,
                },
                {
                    id: 11,
                    factory: 'IT/과학기술',
                    done: false,
                },
                {
                    id: 12,
                    factory: '영화/애니',
                    done: false,
                },
                {
                    id: 13,
                    factory: '자동차',
                    done: false,
                },
                {
                    id: 14,
                    factory: '음악',
                    done: false,
                },
                {
                    id: 15,
                    factory: '스포츠',
                    done: false,
                },

                {
                    id: 16,
                    factory: 'FUN',
                    done: false,
                },
                {
                    id: 17,
                    factory: '시사/정치',
                    done: false,
                },
                {
                    id: 18,
                    factory: '교육',
                    done: false,
                },
                {
                    id: 19,
                    factory: '사회/종교',
                    done: false,
                },
                {
                    id: 20,
                    factory: '키즈',
                    done: false,
                },
                {
                    id: 21,
                    factory: '기타',
                    done: false,
                },
            ],
        },
        {
            id: 3,
            text: '구독자',
            types: [
                {
                    id: 1,
                    factory: '구독자전체',
                    done: true,
                },
                {
                    id: 2,
                    factory: '미정',
                    done: false,
                },
                {
                    id: 3,
                    factory: '그파',
                    done: false,
                },
                {
                    id: 4,
                    factory: '오팔',
                    done: false,
                },
                {
                    id: 5,
                    factory: '브론즈',
                    done: false,
                },
                {
                    id: 6,
                    factory: '실버',
                    done: false,
                },

                {
                    id: 7,
                    factory: '골드',
                    done: false,
                },
                {
                    id: 8,
                    factory: '다이아',
                    done: false,
                },
            ],
        },
    ],

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
        [UNLOAD_CATEGORY]: () => initialState,
    },
    initialState,
);

export default category;
