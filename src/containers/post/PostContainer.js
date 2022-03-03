import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PostComponent from '../../components/post/PostComponent';
import useActions from '../../lib/useActions';
import { readPost, unloadPost } from '../../modules/posts';
import {
    changeInput,
    insert,
    remove,
    decrease,
    increase,
} from '../../modules/select';
import { setCart } from '../../modules/cart';
const PostContainer = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [cartList, setCartList] = useState([]);
    const {
        postDetail,
        postDetailError,
        postDetailLoading,
        input,
        selectProducts,
    } = useSelector(({ posts, loading, select }) => ({
        postDetail: posts.postDetail,
        postDetailError: posts.postDetailError,
        postDetailLoading: loading['posts/READ_POST'],
        input: select.input,
        selectProducts: select.selectProducts,
    }));

    const [onChangeInput, onInsert, onRemove, onDecrease, onIncrease] =
        useActions([changeInput, insert, remove, decrease, increase]);

    const onClick = useCallback(() => {
        let cart_db = [];
        let new_cart = [];
        let overlap_list = [];
        console.log('클릭했을때 cartList 값', cartList);

        if (cartList.length >= 0 && selectProducts.length === 0) {
            // cartList(session에서 가져와서 설정한값 존재) && 아무것도 선택하지 않은 경우
            console.log('카트 변경 없음');
            // sessionStorage.setItem('cart', JSON.stringify(cartList));
        } else if (cartList.length === 0) {
            // cartList가 비어있을 경우
            sessionStorage.setItem('cart', JSON.stringify(selectProducts));
            console.log('cartList가 비어있고 상품을 선택했을경우');
        } else {
            cartList.map((cart_item) => {
                selectProducts.map((select_item) => {
                    if (select_item.id === cart_item.id) {
                        console.log(cart_item);
                        new_cart.push({
                            ...cart_item,
                            number: cart_item.number + select_item.number,
                        });
                        overlap_list.push(select_item.id);
                    }
                });
            });

            console.log('중복 데이터', new_cart);
            console.log('중복 리스트 아이디', overlap_list);
            if (overlap_list.length !== 0) {
                console.log('세션저장소에서 가져온 데이터 - 중복 제거');
                // 마지막 코드
                cartList.map((cart_item) => {
                    if (overlap_list.includes(cart_item.id)) {
                        console.log('중복', cart_item.text);
                    } else {
                        cart_db.push(cart_item);
                    }
                });
                selectProducts.map((select_item) => {
                    if (overlap_list.includes(select_item.id)) {
                        console.log('중복', select_item.text);
                    } else {
                        cart_db.push(select_item);
                    }
                });

                sessionStorage.setItem(
                    'cart',
                    JSON.stringify(cart_db.concat(new_cart)),
                );
            } else {
                console.log('중복이 없음');
                console.log(cartList.concat(selectProducts));
                sessionStorage.setItem(
                    'cart',
                    JSON.stringify(cartList.concat(selectProducts)),
                );
            }
        }
        console.log('클릭 마지막 session에 저장한값 가져오기');
        console.log(JSON.parse(sessionStorage.getItem('cart')));
        dispatch(setCart(JSON.parse(sessionStorage.getItem('cart'))));
        cart_db = [];
        new_cart = [];
        overlap_list = [];
        if (window.confirm('장바구니 고?')) {
            navigate('/cart');
        } else {
            navigate(`/post/${postId}`);
        }
    }, [selectProducts, cartList]);

    useEffect(() => {
        dispatch(unloadPost());
    }, [dispatch]);

    useEffect(() => {
        if (postId) {
            dispatch(readPost(postId));
        }
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        console.log('session storage', cart);
        if (cart) {
            setCartList(cart);
            console.log('set cart List', cartList);
        }
    }, [dispatch, postId, setCartList]);

    return (
        <PostComponent
            selectProducts={selectProducts}
            input={input}
            onInsert={onInsert}
            onChangeInput={onChangeInput}
            onRemove={onRemove}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            postDetail={postDetail}
            postDetailError={postDetailError}
            loading={postDetailLoading}
            onClick={onClick}
        />
    );
};
export default PostContainer;
