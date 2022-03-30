import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CartContentComponent from './CartContentComponent';
import CartTotalInfoComponent from './CartTotalInfoComponent';

const CartBlock = styled.div`
    width: 1080px;
    margin: auto;
    padding-bottom: 4rem;
    .page-tit {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        padding: 50px 0 51px;
        h2 {
            font-weight: 700;
            font-size: 28px;
            color: #333;
            line-height: 35px;
            text-align: center;
        }
    }
    .content {
        display: flex;
    }
`;

const CartComponent = ({
    cartData,
    cartError,
    loading,
    user,
    increase,
    decrease,
    remove,
    toggle,
    onAddressCreate,
    onSelectedAddress,
    onChangeField,
    addresscreateLoading,
    addressList,
    addressListError,
    receiveName,
    phoneNumber,
    detailAddress,
    detailAddressError,
    onDetailAddressClick,
    onGetAddressRetrieve
}) => {
    const dispatch = useDispatch();
    const onIncrease = useCallback(
        (id) => {
            dispatch(increase(id));
        },
        [dispatch, increase],
        cartData
            ? sessionStorage.setItem('cart', JSON.stringify(cartData))
            : console.log('not cart data'),
    );
    const onDecrease = useCallback(
        (id) => {
            dispatch(decrease(id));
            if (cartData) {
                sessionStorage.setItem('cart', JSON.stringify(cartData));
            } else {
                console.log('not cart data');
            }
        },
        [dispatch, decrease, cartData],
    );
    const onToggle = useCallback(
        (id) => {
            dispatch(toggle(id));
            if (cartData) {
                sessionStorage.setItem('cart', JSON.stringify(cartData));
            } else {
                console.log('not cart data');
            }
        },
        [dispatch, toggle, cartData],
    );
    const onRemove = useCallback(
        (id) => {
            dispatch(remove(id));
            if (cartData) {
                sessionStorage.setItem('cart', JSON.stringify(cartData));
            } else {
                console.log('not cart data');
            }
        },
        [dispatch, remove, cartData],
    );
    if (cartError) {
        return <CartBlock>에러 발생했습니다.</CartBlock>;
    }
    return (
        <CartBlock>
            <div className="page-tit">
                <h2>장바구니</h2>
            </div>

            <div className="content">
                <CartContentComponent
                    cartData={cartData}
                    user={user}
                    loading={loading}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
                <CartTotalInfoComponent
                    addressListError={addressListError}
                    addressList={addressList}
                    cartData={cartData}
                    user={user}
                    onChangeField={onChangeField}
                    onAddressCreate={onAddressCreate}
                    onSelectedAddress={onSelectedAddress}
                    addresscreateLoading={addresscreateLoading}
                    receiveName={receiveName}
                    phoneNumber={phoneNumber}
                    detailAddress={detailAddress}
                    detailAddressError={detailAddressError}
                    onDetailAddressClick={onDetailAddressClick}
                    onGetAddressRetrieve={onGetAddressRetrieve}
                />
            </div>
        </CartBlock>
    );
};
export default CartComponent;
