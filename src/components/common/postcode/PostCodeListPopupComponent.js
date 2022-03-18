import React from 'react';
import styled from 'styled-components';
// import palette from '../../../lib/styles/palette';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { BsPencil } from 'react-icons/bs';
import palette from '../../../lib/styles/palette';
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
        min-height: 464px;
        max-height: 464px;
        overflow-y: auto;
    }
    .button-block {
        width: 100%;
        height: 60px;
        font-size: 16px;
        font-weight: 700;
        padding-top: 16px;
        text-align: center;
        line-height: 24px;
        background-color: #fff;
        color: #333;
        border: 1px solid ${palette.gray[4]};
        border-radius: 10px;
        margin-top: 10px;
    }
`;

const PostCodeItemBlock = styled.div`
    width: 100%;
    display: flex;

    .select-block {
        width: 15%;
        padding: 30px 18px 30px 18px;
    }
    .address-info-block {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .default-address-tag {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            padding-bottom: 7px;
            .tag-box {
                padding: 0px 8px 0;
                font-size: 12px;
                font-weight: 600;
                color: #666;
                line-height: 22px;
                background-color: #f7f7f7;
                border-radius: 11px;
                height: 22px;
            }
        }
        .address-box {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            font-size: 16px;
            color: #333;
            line-height: 20px;
            word-break: break-all;
        }
        .deliverty-possible-tag {
            width: 100%;
            padding-top: 7px;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            justify-content: flex-start;
            color: ${palette.cyan[5]};
        }
    }
    .update-block {
        width: 15%;
        padding: 30px 18px 30px 18px;
    }
`;
const PostCodeItemComponent = ({ openPostCodeDetailPopup, addr }) => {
    return (
        <PostCodeItemBlock>
            <div className="select-block">
                <AiOutlineCheckCircle size={24} />
            </div>
            <div className="address-info-block">
                {addr.default_address === true ? (
                    <div className="default-address-tag">
                        <div className="tag-box">기본 배송지</div>
                    </div>
                ) : null}
                <div className="address-box">{addr.address}</div>
                <div className="deliverty-possible-tag">배송가능</div>
            </div>
            <div className="update-block" onClick={openPostCodeDetailPopup}>
                <BsPencil size={24} />
            </div>
        </PostCodeItemBlock>
    );
};

const PostCodeListPopupComponent = ({
    openPostCodePopup,
    openPostCodeDetailPopup,
    addressList,
}) => {
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
                {addressList.map((addr, index) => (
                    <PostCodeItemComponent
                        openPostCodeDetailPopup={openPostCodeDetailPopup}
                        key={index}
                        addr={addr}
                    />
                ))}
            </div>
            <div className="button-block" onClick={openPostCodePopup}>
                + 새 배송지 추가
            </div>
        </PostCodeListPopupBlock>
    );
};
export default PostCodeListPopupComponent;
