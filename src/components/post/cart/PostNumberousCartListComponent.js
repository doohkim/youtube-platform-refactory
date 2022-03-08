import React from 'react';
import styled from 'styled-components';
import { BsX } from 'react-icons/bs';
const PostNumberousCartListBlock = styled.div`
    width: 60%;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    word-break: break-all;
    text-align: justify;
`;

const PostSelectedItemBlock = styled.div`
    padding: 11px 10px 11px 15px;
    border: 1px solid lightgray;

    .first-block {
        display: flex;
        justify-content: space-between;

        .name {
            width: 80%;
        }
        .remove-btn {
            width: 20px;
            display: flex;
            justify-content: flex-end;
        }
    }
    .second-block {
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
        .number-block {
            overflow: hidden;
            border: 1px solid #dddfe1;
            border-radius: 3px;
            display: flex;
            justify-content: flex-start;
            .number {
                font-size: 14px;
                font-weight: 400;
                padding-top: 4px;
            }
            button {
                overflow: hidden;
                background-color: inherit;
                border: 0;
                width: 28px;
                height: 28px;
                font-size: 20px;
            }
        }
        .price-block {
            width: 40%;
            display: flex;
            justify-content: flex-end;
        }
    }
`;

const PostSelectedItemComponent = ({
    index,
    product,
    onIncrease,
    onDecrease,
    numberWithCommas,
    onRemove,
}) => {
    const { id, text, number, price } = product;
    return (
        <PostSelectedItemBlock>
            <div className="first-block">
                <div className="name">{text}</div>
                <div className="remove-btn" onClick={() => onRemove(id)}>
                    <BsX size={20} color="gray" />
                </div>
            </div>
            <div className="second-block">
                <div className="number-block">
                    <button onClick={() => onDecrease(id)}>-</button>
                    <div className="number">{number}</div>
                    <button onClick={() => onIncrease(id)}>+</button>
                </div>
                <div className="price-block">{numberWithCommas(price)}원</div>
            </div>
        </PostSelectedItemBlock>
    );
};

const PostNumberousCartListComponent = ({
    selectProducts,
    onRemove,
    onDecrease,
    onIncrease,
    numberWithCommas,
}) => {
    return (
        <PostNumberousCartListBlock>
            {selectProducts.map((product) => (
                <PostSelectedItemComponent
                    product={product}
                    key={product.id}
                    index={product.id}
                    onRemove={onRemove}
                    onDecrease={onDecrease}
                    onIncrease={onIncrease}
                    numberWithCommas={numberWithCommas}
                />
            ))}
        </PostNumberousCartListBlock>
    );
};

export default PostNumberousCartListComponent;
