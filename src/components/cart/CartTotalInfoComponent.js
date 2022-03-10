import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { IoLocationOutline } from 'react-icons/io5';
import Modal from '../common/postcode/Modal';
import DaumPostcode from 'react-daum-postcode';
import CartCalculateComponent from './CartCalculateComponent';
import { Link } from 'react-router-dom';
import { getTotalAmount } from '../../lib/fpp';

const CartTotalInfoBlock = styled.div`
    width: 25%;
    margin-left: 20px;

    .address-block {
        width: 100%;
        padding: 20px 19px 20px 19px;
        border: 1px solid ${palette.gray[2]};
        .tit-block {
            display: flex;
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
            .tit {
                padding-left: 5px;
            }
            .location-img {
                width: 20px;
                height: 20px;
            }
        }
        .address-text-block {
            font-weight: 700;
            padding-top: 11px;

            .text {
                .special-text {
                    color: ${palette.cyan[5]};
                }
            }
            .address-input-btn {
                margin-top: 17px;
                width: 100%;
                height: 40px;
                font-size: 12px;
                line-height: 36px;
                display: block;
                border: 1px solid ${palette.cyan[5]};
                color: ${palette.cyan[5]};
                background-color: #fff;
                text-align: center;
                border-radius: 4px;
            }
        }
    }

    .order-button-block {
        width: 100%;
        padding: 20px 0 0;
        z-index: 2;

        .order-btn {
            border: 1px solid ${palette.cyan[5]};
            background-color: ${palette.cyan[5]};
            width: 100%;
            height: 56px;
            border-radius: 6px;
            color: #fff;
        }
        .disabled-order-btn {
            border: 1px solid ${palette.gray[3]};
            background-color: ${palette.gray[3]};
            width: 100%;
            height: 56px;
            border-radius: 6px;
            color: #fff;
        }
    }
`;

const SecondPopUpBlock = styled.div`
    min-height: 320px;
    padding: 0 30px;
    .second-tit-block {
        .second-tit {
            width: 100%;
            display: flex;
            text-align: center;
            padding: 20px 0 9px;
            font-weight: 700;
            font-size: 22px;
            .delivery-type {
                color: ${palette.cyan[5]};
            }
        }
        .second-desc {
            font-size: 16px;
            line-height: 22px;
            color: #999;
        }
    }
    .field-block {
        width: 100%;
        .extra-address-block {
            padding-top: 30px;
            width: 100%;
            .extra-address-input {
                border: 1px solid ${palette.cyan[5]};
                padding-left: 10px;
                width: 100%;
                height: 44px;
                border-radius: 3px;
                font-family: sans-serif;
                font-size: 14px;
            }
        }
    }
    .btn-block {
        margin-top: 10px;
        button {
            background-color: ${palette.cyan[5]};
            border: 1px solid ${palette.cyan[5]};
            color: #fff;
            width: 100%;
            height: 44px;
            border-radius: 3px;
            font-weight: 700;
            font-size: 14px;
            line-height: 42px;
        }
    }
`;

const CartTotalInfoComponent = ({ cartData, user }) => {
    const [selectedCartItems, setSelectedCartItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isOpenSecondPopup, setIsOpenSecondPopup] = useState(false);
    const [address, setAddress] = useState(null);
    const [postCodes, setPostCodes] = useState(null);
    const [detailAddress, setDetailAddress] = useState('');
    const handleComplete = useCallback(
        (data) => {
            let fullAddress = data.address;
            let extraAddress = '';
            let zoneCodes = data.zonecode;
            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress +=
                        extraAddress !== ''
                            ? `, ${data.buildingName}`
                            : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }
            //fullAddress -> 전체 주소반환
            setAddress(fullAddress);
            setPostCodes(zoneCodes);
            setIsOpenSecondPopup(true);
        },
        [address, postCodes, isOpenSecondPopup],
    );
    const openModal = useCallback(() => {
        setModalVisible(true);
    }, []);
    const closeModal = useCallback(() => {
        setModalVisible(false);
        setIsOpenSecondPopup(false);
    });
    const onChange = useCallback(
        (e) => {
            setDetailAddress(e.target.value);
        },
        [detailAddress],
    );
    const onClick = useCallback(
        (e) => {
            e.preventDefault();
            setAddress(address + detailAddress);
            setIsOpenSecondPopup(false);
            closeModal(false);
            setDetailAddress('');
        },
        [closeModal, address, detailAddress, setAddress, setDetailAddress],
    );

    const getTotalAmount = useCallback((cartItems) => {
        let acc = 0;
        if (cartItems.length === 0) return 0;
        else {
            cartItems.map((item) => {
                acc = acc + item.price * item.number;
            });
            return acc;
        }
    }, []);

    useEffect(() => {
        // user 정보가 바뀔수도 있음
        // user address 가 없을 수도 있음

        if (user) {
            setAddress(user.user.user_addresses[0].address);
        }
        if (cartData) {
            setSelectedCartItems(
                cartData.filter((cart_item) => cart_item.checked === true),
            );
        }
    }, [user, cartData, setAddress, setSelectedCartItems]);
    return (
        <CartTotalInfoBlock>
            <div className="address-block">
                <div className="tit-block">
                    <div className="location-img">
                        <IoLocationOutline size={20} />
                    </div>
                    <div className="tit">배송지</div>
                </div>
                {address ? (
                    <div className="address-text-block">
                        <div className="text">{address}</div>
                        <button
                            className="address-input-btn"
                            onClick={openModal}
                        >
                            배송지 변경
                        </button>
                    </div>
                ) : (
                    <div className="address-text-block">
                        <div className="text">
                            <span className="special-text">배송지 입력</span>을
                            하고
                            <br />
                            배송유형을 확인해 보세요
                        </div>
                        <button
                            className="address-input-btn"
                            onClick={openModal}
                        >
                            주소검색
                        </button>
                    </div>
                )}
                {modalVisible && (
                    <Modal
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={closeModal}
                    >
                        <DaumPostcode
                            onComplete={handleComplete}
                            className="post-code"
                        />
                        {isOpenSecondPopup && (
                            <SecondPopUpBlock>
                                <div className="second-tit-block">
                                    <div className="second-tit">
                                        <div className="delivery-type">
                                            새벽배송
                                        </div>
                                        <div>지역입니다</div>
                                    </div>

                                    <div className="second-desc">
                                        매일 아침, 문 앞까지 신선함을 전해
                                        드려요
                                    </div>
                                </div>
                                <div className="field-block">
                                    <div className="extra-address-block">
                                        <input
                                            className="extra-address-input"
                                            placeholder="상세주소 입력을 해주세요"
                                            onChange={onChange}
                                            value={detailAddress}
                                        />
                                    </div>
                                </div>
                                <div className="btn-block">
                                    <button onClick={onClick}>저장</button>
                                </div>
                            </SecondPopUpBlock>
                        )}
                    </Modal>
                )}
            </div>

            <CartCalculateComponent
                totalAmount={getTotalAmount(selectedCartItems)}
            />

            {selectedCartItems.length === 0 ? (
                <div className="order-button-block">
                    <Link to="/payment">
                        <button disabled className="disabled-order-btn">
                            상품을 담아주세요
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="order-button-block">
                    <Link to="/order">
                        <button className="order-btn">주문하기</button>
                    </Link>
                </div>
            )}
        </CartTotalInfoBlock>
    );
};
export default CartTotalInfoComponent;
