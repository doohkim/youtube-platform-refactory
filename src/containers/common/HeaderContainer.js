import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/common/header/HeaderComponent';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    return <HeaderComponent user={user} onLogout={onLogout} />;
};
export default HeaderContainer;
