import React from 'react';
import styled from 'styled-components';
// import palette from '../../../lib/styles/palette';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { BsPencil } from 'react-icons/bs';
const PostCodeListPopupBlock = styled.div`
    width: 100%;
    padding: 32px 30px 0 30px;

    .headline-block {
        width: 100%;
        display: flex;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;

        .headline-description-block {
            display: flex;
            align-items: center;
            padding-left: 12px;
            font-weight: 400;
            font-size: 14px;
            color: #999;
            line-height: 20px;
        }
    }
    .columns-block {
        width: 100%;
        border-top: 2px solid #333;
        border-bottom: 1px solid #333;
        overflow: hidden;
        padding: 15px 0 13px;
        margin: 18px auto 0;
        display: flex;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;

        .column-side-box {
            width: 15%;
        }
        .column-center-box {
            width: 70%;
        }
    }

    .address-list-block {
        min-height: 320px;
        max-height: 513px;
        overflow-y: auto;
    }
`;

const PostCodeItemBlock = styled.div`
    width: 100%;
    /* min-height: 320px;
    max-height: 513px;
    overflow-y: auto; */
    display: flex;

    .select-block {
        width: 15%;
        padding: 30px 18px 30px 18px;
    }
    .address-info-block {
        width: 70%;
    }
    .update-block {
        width: 15%;
        padding: 30px 18px 30px 18px;
    }
`;
const PostCodeItemComponent = () => {
    return (
        <PostCodeItemBlock>
            <div className="select-block">
                <AiOutlineCheckCircle size={24} />
            </div>
            <div className="address-info-block">ddd</div>
            <div className="update-block">
                <BsPencil size={24} />
            </div>
        </PostCodeItemBlock>
    );
};

const PostCodeListPopupComponent = () => {
    return (
        <PostCodeListPopupBlock>
            <div className="headline-block">
                <div className="title">배송지</div>
                <div className="headline-description-block">
                    배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.
                </div>
            </div>
            <div className="columns-block">
                <div className="column-side-box">선택</div>
                <div className="column-center-box">배송 정보</div>
                <div className="column-side-box">수정</div>
            </div>
            <div className="address-list-block">
                <PostCodeItemComponent />
            </div>
        </PostCodeListPopupBlock>
    );
};
export default PostCodeListPopupComponent;
