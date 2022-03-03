import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INCREASE = 'select/INCREASE';
const DECREASE = 'select/DECREASE';
const CHANGE_INPUT = 'select/CHANGE_INPUT';
const INSERT = 'select/INSERT';
const REMOVE = 'select/REMOVE';
const UNLOAD_CART_PRODUCT = 'select/UNLOAD_CART_PRODUCT';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (id, text, price) => ({
    id: id,
    text: text,
    price: price,
    number: 1,
    checked: false,
}));

export const remove = createAction(REMOVE, (id) => id);
export const unloadCartProduct = createAction(UNLOAD_CART_PRODUCT);

const initialState = {
    input: '상품 선택',
    selectProducts: [],
};

const select = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, (draft) => {
                draft.input = input;
            }),
        [INSERT]: (state, { payload: product }) =>
            produce(state, (draft) => {
                let duplicateItem = false;

                draft.selectProducts.find((selectedProduct) => {
                    if (product.id === selectedProduct.id) {
                        duplicateItem = true;
                    }
                });
                if (duplicateItem) {
                    draft.selectProducts = state.selectProducts;
                    alert('중복');
                } else {
                    draft.selectProducts.push(product);
                }
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const index = draft.selectProducts.findIndex(
                    (product) => product.id === id,
                );
                draft.selectProducts.splice(index, 1);
            }),
        [INCREASE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const product = draft.selectProducts.find(
                    (product) => product.id === id,
                );
                if (product.number === 1) {
                    product.number = 1;
                } else {
                    product.number = product.number + 1;
                }
            }),
        [DECREASE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const product = draft.selectProducts.find(
                    (product) => product.id === id,
                );
                if (product.number === 1) {
                    product.number = 1;
                } else {
                    product.number = product.number - 1;
                }
            }),
        [UNLOAD_CART_PRODUCT]: () => initialState,
    },
    initialState,
);

export default select;
