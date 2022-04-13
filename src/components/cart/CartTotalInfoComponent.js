import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { IoLocationOutline } from 'react-icons/io5';
import Modal from '../common/postcode/Modal';
import DaumPostcode from 'react-daum-postcode';
import CartCalculateComponent from './CartCalculateComponent';
import { Link } from 'react-router-dom';
import SecondPopUpComponent from '../common/postcode/SecondPopUpComponent';
import PostCodeListPopupComponent from '../common/postcode/PostCodeListPopupComponent';
import PostCodeDeliveryUpdatePopupComponent from '../common/postcode/PostCodeDeliveryUpdatePopupComponent';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
// import * as moduleAddress from '../../modules/address';

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

const CartTotalInfoComponent = ({
    cartData,
    user,
    onAddressCreate,
    onSelectedAddress,
    onChangeField,
    addresscreateLoading,
    addressList,
    // addressListError,
    receiveName,
    phoneNumber,
    onDetailAddressClick,
    onGetAddressRetrieve,
    detailAddress,
    detailAddressError,
    onRemoveAddress,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCartItems, setSelectedCartItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [postCodePopup, setPostCodePopup] = useState(false);
    const [postCodeListPopup, setPostCodeListPopup] = useState(true);
    // 배송지 상세 페이지 open or close
    const [postCodeDeliveryUpdatePopup, setPostCodeDeliveryUpdatePopup] =
        useState(false);
    // 배송지 추가 버튼 클릭 루트 or 일반 배송지 주소 찾는 것 인지 구분
    const [dividePopup, setDividePopup] = useState('default');
    const [isOpenSecondPopup, setIsOpenSecondPopup] = useState(false);
    const [address, setAddress] = useState(null);
    // const [postCodes, setPostCodes] = useState(null);
    const [detailAddres, setDetailAddres] = useState('');
    const handleComplete = useCallback(
        (data) => {
            let fullAddress = data.address;
            let extraAddress = '';
            // let zoneCodes = data.zonecode;
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
            // setPostCodes(zoneCodes);
            setIsOpenSecondPopup(true);
        },
        // address, postCodes, isOpenSecondPopup
        [setAddress, setIsOpenSecondPopup],
    );
    // modal(popup) 창 열림
    const openModal = useCallback(() => {
        setModalVisible(true);
    }, []);

    // 비회원 - post code modal(popup) 열림
    const openNonMemberModal = useCallback(() => {
        setModalVisible(true);
        setPostCodeListPopup(false);
        setPostCodePopup(true);
    }, []);

    // 배송지 추가 버튼 누름
    // post list 창 닫기 postCode modal(popup) 열림
    const openPostCodePopup = useCallback(() => {
        setPostCodeListPopup(false);
        setPostCodePopup(true);
        setDividePopup('new');
    }, []);

    // post code list 창에서 수정 버튼 누를때
    const openPostCodeDetailPopup = useCallback((id) => {
        // post code list 창 닫기
        setPostCodeListPopup(false);
        // 배송지 상세 페이지 창 열기
        setPostCodeDeliveryUpdatePopup(true);
        onGetAddressRetrieve(id);
    }, []);

    // 주소 상세페이지(저장 버튼 클릭)
    // Pop up 페이지 - 주소 리스트 - 주소 상세페이지(저장 버튼 클릭)
    const onSavePostCodeDetailInfo = useCallback(
        (id, receiveName, phoneNumber, default_address) => {
            setModalVisible(false);
            setIsOpenSecondPopup(false);
            setPostCodeListPopup(true);
            setPostCodeDeliveryUpdatePopup(false);
            onDetailAddressClick({
                id,
                receiveName,
                phoneNumber,
                default_address,
            });
            navigate(0);
        },
        [],
    );

    const onDeletePostCodeDetailInfo = useCallback((id) => {
        setModalVisible(false);
        setIsOpenSecondPopup(false);
        setPostCodeListPopup(true);
        setPostCodeDeliveryUpdatePopup(false);
        onRemoveAddress(id);
    }, []);

    const onCloseModal = useCallback(() => {
        setPostCodeListPopup(true);
        setModalVisible(false);
        setIsOpenSecondPopup(false);
        setPostCodePopup(false);
        setPostCodeDeliveryUpdatePopup(false);
        setDividePopup('default');
    }, []);
    const onChange = useCallback(
        (e) => {
            setDetailAddres(e.target.value);
        },
        [setDetailAddres],
    );

    const onClick = useCallback(
        (e) => {
            e.preventDefault();
            if (dividePopup === 'new') {
                onAddressCreate(address + detailAddres);
            }
            setAddress(address + detailAddres);
            setDetailAddres('');
            setIsOpenSecondPopup(false);
            onCloseModal(false);
            setPostCodeListPopup(true);
            setPostCodePopup(false);
            if (dividePopup === 'new') {
                setDividePopup('default');
                navigate(0);
            }
        },
        [
            onCloseModal,
            address,
            detailAddres,
            setAddress,
            setDetailAddres,
            dividePopup,
            onAddressCreate,
            setDividePopup,
            navigate,
        ],
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
            if (addressList) {
                // sessionStorage.setItem(
                //     'address',
                //     JSON.stringify(addressList.results),
                // );
                // dispatch(moduleAddress.setAddress(addressList.results));
                const selectedAddress = addressList.results.filter(
                    (address) => address.selected_address === true,
                );
                if (selectedAddress.length !== 0) {
                    setAddress(selectedAddress[0].address);
                } else {
                    setAddress(null);
                }
            }
        }
        if (cartData) {
            setSelectedCartItems(
                cartData.filter((cart_item) => cart_item.checked === true),
            );
        }
    }, [
        user,
        cartData,
        setAddress,
        setSelectedCartItems,
        addressList,
        dispatch,
    ]);
    console.log(addressList)
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
                            onClick={user ? openModal : openNonMemberModal}
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
                            onClick={user ? openModal : openNonMemberModal}
                        >
                            주소검색
                        </button>
                    </div>
                )}
                {!addresscreateLoading && modalVisible && (
                    <Modal
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={onCloseModal}
                    >
                        {postCodeListPopup && (
                            <PostCodeListPopupComponent
                                openPostCodePopup={openPostCodePopup}
                                openPostCodeDetailPopup={
                                    openPostCodeDetailPopup
                                }
                                addressList={addressList.results}
                                onSelectedAddress={onSelectedAddress}
                            />
                        )}
                        {postCodeDeliveryUpdatePopup && detailAddress && (
                            <PostCodeDeliveryUpdatePopupComponent
                                onSavePostCodeDetailInfo={
                                    onSavePostCodeDetailInfo
                                }
                                onDeletePostCodeDetailInfo={
                                    onDeletePostCodeDetailInfo
                                }
                                onChangeField={onChangeField}
                                detailAddress={detailAddress}
                                detailAddressError={detailAddressError}
                                receiveName={receiveName}
                                phoneNumber={phoneNumber}
                            />
                        )}
                        {postCodePopup && (
                            <DaumPostcode
                                onComplete={handleComplete}
                                className="post-code"
                            />
                        )}
                        {isOpenSecondPopup && (
                            <SecondPopUpComponent
                                onChange={onChange}
                                detailAddres={detailAddres}
                                onClick={onClick}
                            />
                        )}
                    </Modal>
                )}
            </div>

            <CartCalculateComponent
                totalAmount={getTotalAmount(selectedCartItems)}
            />

            {selectedCartItems.length === 0 ? (
                <div className="order-button-block">
                    <Link to="#">
                        <button disabled className="disabled-order-btn">
                            상품을 담아주세요
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="order-button-block">
                    {addressList && addressList.count == 0 ? (
                        <Link to="/payment">
                            <button disabled className="disabled-order-btn">
                                주소를 입력해주세요
                            </button>
                        </Link>
                    ) : (
                        <Link to="/payment">
                            <button className="order-btn">주문하기</button>
                        </Link>
                    )}
                </div>
            )}
        </CartTotalInfoBlock>
    );
};
export default CartTotalInfoComponent;
