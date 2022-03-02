import React from 'react';
import styled from 'styled-components';
import { BiDownArrow } from 'react-icons/bi';
const PostNumberousCartBlock = styled.div`
    width: 100%;
    border-radius: 4px;
    border: 2px solid lightgray;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    word-break: break-all;
    text-align: justify;
    display: flex;
    .option-list {
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        overflow: hidden;
        max-height: 0;

        .item_name {
            background-color: white;
            color: #fff;
        }
    }
    
    .icoArrow {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 35px;
        height: inherit;
        border-left: 2px solid lightcoral;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 50%;
            transition: 0.3s;
        }
    }
    
`;

const PostNumberousCartComponent = () => {
    return (
        <PostNumberousCartBlock>
            <div class="text">선택</div>
            <ul class="option-list">
                <li class="option">샤인머스켓</li>
                <li class="option">체리</li>
                <li class="option">홍시</li>
            </ul>
        </PostNumberousCartBlock>
    );
};
export default PostNumberousCartComponent;
