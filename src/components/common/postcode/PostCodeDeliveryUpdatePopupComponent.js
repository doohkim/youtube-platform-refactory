import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
const PostCodeDeliveryUpdatePopupBlock = styled.div`
    width: 100%;
    padding: 32px 30px 0 30px;
    .headline-block {
        width: 100%;
        display: flex;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
    }
    .delivery-info-block {
        width: 100%;
        min-height: 464px;
        .info-block {
            padding-top: 22px;
            .address-block {
                input::placeholder {
                    color: ${palette.gray[5]};
                }
                .main-address {
                    padding-bottom: 7px;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                }
                .detail-address {
                    width: 100%;
                    height: 44px;
                    padding: 1px 11px 0 15px;
                    border-radius: 3px;
                    font-family: sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    border: 1px solid #ddd;
                }
                .column-block {
                    padding-bottom: 5px;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                }
                .value-block {
                    width: 100%;
                    height: 44px;
                    padding: 1px 11px 0 15px;
                    border-radius: 3px;
                    font-family: sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    border: 1px solid #ddd;
                }
            }
        }
        .default-address-block {
            padding: 20px 0 19px;
            font-size: 14px;
            .default-address-inner-check {
                display: flex;
                .check-box {
                    display: flex;
                    align-items: center;
                }
                .default-box {
                    font-weight: 400;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 7px;
                }
            }

            .btn-block {
                width: 100%;

                button {
                    width: 100%;
                    border-radius: 3px;
                    font-weight: 700;
                    line-height: 42px;
                    height: 44px;
                }
                .save-btn {
                    margin-top: 12px;
                    background-color: ${palette.cyan[5]};
                    border: 1px solid ${palette.cyan[5]};
                    color: #fff;
                }
                .delete-btn {
                    margin-top: 12px;
                    background-color: #fff;
                    border: 1px solid ${palette.gray[4]};
                }
            }
        }
    }
`;

const PostCodeDeliveryUpdatePopupComponent = ({
    onSavePostCodeDetailInfo,
    onDeletePostCodeDetailInfo,
    onChangeField,
    phoneNumber,
    receiveName,
    detailAddress,
    detailAddressError,
}) => {
    const {
        id,
        address,
        default_address,
        selected_address,
        phone_number,
        receive_name,
    } = detailAddress;

    const [defaultAddressValue, setDefaultAddressValue] =
        useState(default_address);

    const onDefaultAddressClick = useCallback(() => {
        setDefaultAddressValue(!defaultAddressValue);
    }, [defaultAddressValue]);

    const onChange = useCallback((e) => {
        onChangeField({ key: e.target.name, value: e.target.value });
    }, []);

    return (
        <PostCodeDeliveryUpdatePopupBlock>
            <div className="headline-block">
                <div className="title">배송지 수정</div>
            </div>
            <div className="delivery-info-block">
                <div className="info-block">
                    <div className="address-block">
                        <div className="main-address">{address}</div>
                    </div>
                </div>
                <div className="info-block">
                    <div className="address-block">
                        <div className="column-block">받으실 분</div>
                        <div className="column-block">{receive_name}</div>
                        <input
                            className="value-block"
                            placeholder="이름을 입력해주세요."
                            name="receiveName"
                            onChange={onChange}
                            value={receiveName}
                        />
                    </div>
                </div>
                <div className="info-block">
                    <div className="address-block">
                        <div className="column-block">휴대폰 번호</div>
                        <div className="column-block">{phone_number}</div>
                        <input
                            className="value-block"
                            placeholder="핸드폰 번호를 입력해주세요."
                            name="phoneNumber"
                            onChange={onChange}
                            value={phoneNumber}
                        />
                    </div>
                </div>
                <div className="default-address-block">
                    {default_address === false ? (
                        <div
                            className="default-address-inner-check"
                            onClick={() => onDefaultAddressClick()}
                        >
                            <div className="check-box">
                                {defaultAddressValue === true ? (
                                    <AiFillCheckCircle
                                        size={24}
                                        color={`${palette.cyan[3]}`}
                                    />
                                ) : (
                                    <AiOutlineCheckCircle
                                        size={24}
                                        color={`${palette.gray[3]}`}
                                    />
                                )}
                            </div>
                            <div className="default-box">
                                기본 배송지로 저장
                            </div>
                        </div>
                    ) : null}

                    <div className="btn-block">
                        <button
                            className="save-btn"
                            onClick={() =>
                                onSavePostCodeDetailInfo(
                                    id,
                                    receiveName,
                                    phoneNumber,
                                    defaultAddressValue,
                                )
                            }
                        >
                            저장
                        </button>
                    </div>
                    <div className="btn-block">
                        <button
                            className="delete-btn"
                            onClick={() => onDeletePostCodeDetailInfo(id)}
                        >
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </PostCodeDeliveryUpdatePopupBlock>
    );
};

export default PostCodeDeliveryUpdatePopupComponent;
