import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FooterComponent from './components/common/footer/FooterComponent';
import HeaderContainer from './containers/common/HeaderContainer';

const LayoutBlock = styled.div`
    width: 1080px;
    height: 100%;
    margin: auto;
    .main {
        margin-top: 1rem;
        /* height: 800px; */
    }
`;

const Layout = () => {
    return (
        <LayoutBlock>
            <HeaderContainer />
            <div className="main">
                <Outlet />
            </div>
            <FooterComponent />
        </LayoutBlock>
    );
};
export default Layout;
