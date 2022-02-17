import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FooterComponent from './components/common/footer/FooterComponent';
import HeaderContainer from './containers/common/HeaderContainer';

const LayoutBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main {
        margin-top: 1rem;
        /* background-color: lightgray; */
        width: 100%;
    }
`;
const Spacer = styled.div`
    height: 8rem;
`;
const Layout = () => {
    return (
        <LayoutBlock>
            <HeaderContainer />
            <Spacer />
            <div className="main">
                <Outlet />
            </div>
            <FooterComponent />
        </LayoutBlock>
    );
};
export default Layout;
