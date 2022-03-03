import React from 'react';
import styled from 'styled-components';
const PostNumberousCartBlock = styled.div`
    width: 60%;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    word-break: break-all;
    text-align: justify;
    .select-box {
        display: block;
        overflow: hidden;
        width: 100%;
        padding: 9px 0 9px 15px;
        border: 2px solid #f4f4f4;
        font-size: 12px;
        line-height: 20px;
        .option-block {
            color: #fff;
            background-color: white;
            text-align: justify;
        }
    }
`;

const PostNumberousCartComponent = ({
    input,
    onChange,
    numberWithCommas,
    products,
}) => {
    return (
        <PostNumberousCartBlock>
            <select className="select-box" onChange={onChange} value={input}>
                <option className="option-block" value="" hidden>
                    상품선택
                </option>
                {products.map((product) => (
                    <option
                        className="option-block"
                        key={product.id}
                        value={product.name}
                    >
                        {product.name}({numberWithCommas(product.price)}원)
                    </option>
                ))}
            </select>
        </PostNumberousCartBlock>
    );
};
export default PostNumberousCartComponent;
