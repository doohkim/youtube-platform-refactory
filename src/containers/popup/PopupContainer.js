import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopupComponent from '../../components/popup/PopupComponent';

const PopupContainer = () => {
    const dispatch = useDispatch();
    const { selectedAddress, selectedAddressError, selectedAddressLoading } =
        useSelector(({ order, loading, user }) => ({
            user: user.user,
            selectedAddress: order.selectedAddress,
            selectedAddressError: order.selectedAddressError,
            selectedAddressLoading: loading['order/SELECTED_ADDRESS'],
        }));
    return <PopupComponent />;
};
export default PopupContainer;
