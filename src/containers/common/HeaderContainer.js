import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import HeaderComponent from '../../components/common/header/HeaderComponent';
import { logout } from '../../modules/user';

const HeaderContainerBlock = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    background: white;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
`;

const HeaderContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <HeaderContainerBlock>
            <HeaderComponent user={user} onLogout={onLogout} />
        </HeaderContainerBlock>
    );
};
export default HeaderContainer;
