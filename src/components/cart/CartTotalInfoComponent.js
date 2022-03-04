import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { IoLocationOutline } from 'react-icons/io5';
import Modal from '../common/postcode/Modal';
import DaumPostcode from 'react-daum-postcode';

const CartTotalInfoBlock = styled.div`
    width: 25%;
    margin-left: 20px;
    border: 1px solid ${palette.gray[2]};

    .address-block {
        width: 100%;
        padding: 20px 19px 20px 19px;
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
    .totla-calculate-info-block {
    }
    .order-button-block {
    }
`;

const CartTotalInfoComponent = () => {
    const [selectedCartItems, setSelectedCartItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isOpenSecondPopup, setIsOpenSecondPopup] = useState(false);
    const [address, setAddress] = useState(null);
    const [postCodes, setPostCodes] = useState(null);
    const [detailAddress, setDetailAddress] = useState('');
    // useEffect(() => {
    //     setAddress('경기도 광명시 광삼로 27번길 3 101호')
    // },[setAddress])
    const openModal = useCallback(() => {
        setModalVisible(true);
    },[]);
    const closeModal = useCallback(() => {
        setModalVisible(false)
    }) 
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
                        <button className="address-input-btn" onClick={openModal}>
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
                        <button className="address-input-btn" onClick={openModal}>주소검색</button>
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
                            // onComplete={handleComplete}
                            className="post-code"
                        />
                        {/* {isOpenSecondPopup && (
                            <div>
                                <h3>상세 주소 입력</h3>
                                <input
                                    placeholder="상세주소 입력을 해주세요"
                                    // onChange={onChange}
                                    value={detailAddress}
                                /> 
                                <button>저장</button>
                            </div>
                        )} */}
                    </Modal>
                )}
            </div>
            <div className="totla-calculate-info-block">


            </div>
            <div className="order-button-block"></div>
        </CartTotalInfoBlock>
    );
};
export default CartTotalInfoComponent;
