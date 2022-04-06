import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopupComponent from '../../components/popup/PopupComponent';
import { updateAddressDetail } from '../../modules/address';
import { changeField, getSelectedAddress } from '../../modules/order';

const PopupContainer = () => {
    const dispatch = useDispatch();

    const {
        selectedAddress,
        selectedAddressError,
        selectedAddressLoading,
        receiveName,
        phoneNumber,
    } = useSelector(({ order, loading, user }) => ({
        user: user.user,
        selectedAddress: order.selectedAddress,
        selectedAddressError: order.selectedAddressError,
        selectedAddressLoading: loading['order/SELECTED_ADDRESS'],
        receiveName: order.receiveName,
        phoneNumber: order.phoneNumber,
    }));
    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch],
    );
    const onSavePostCodeDetailInfo = useCallback(
        ({ id, receiveName, phoneNumber }) => {
            console.log(id)
            dispatch(
                updateAddressDetail({
                    id,
                    receiveName,
                    phoneNumber,
                }),
            );
            window.opener.location.reload()
            window.close()
        },
        [dispatch],
    );
    const onClosePopup = useCallback(() => {
        window.opener.location.reload()
        window.close()
    },[])
    useEffect(() => {
        dispatch(getSelectedAddress());
    }, [dispatch]);
    return (
        <>
            {!selectedAddressLoading && selectedAddress && (
                <PopupComponent
                    onChangeField={onChangeField}
                    selectedAddress={selectedAddress}
                    selectedAddressError={selectedAddressError}
                    selectedAddressLoading={selectedAddressLoading}
                    onSavePostCodeDetailInfo={onSavePostCodeDetailInfo}
                    onClosePopup={onClosePopup}
                    phoneNumber={phoneNumber}
                    receiveName={receiveName}
                />
            )}
        </>
    );
};
export default PopupContainer;
