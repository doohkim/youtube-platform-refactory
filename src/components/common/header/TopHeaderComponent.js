import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Responsive from '../Responsive';
import { Link } from 'react-router-dom';
import HeaderSearchComponent from './HeaderSearchComponent';

const TopHeaderBlock = styled(Responsive)`
    width: 100%;
    height: 70px;
    /* border: 1px solid darkgray; */
    display: flex;
    align-items: center;
    .logo {
        width: 15%;
        font-size: 1.125rem;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .extra-container {
        display: flex;
        flex: 1;
        /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
        /* justify-content: space-between; */
        justify-content: flex-end;

        .user-info {
            display: flex;
            align-items: center;
        }
        /* & + & {
            margin-right: 4rem;
        } */
    }
`;
const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;
const TopHeaderComponent = ({ user, onLogout }) => {
    // console.log(user);
    return (
        <TopHeaderBlock>
            <Link to="/" className="logo">
                LUMEN
            </Link>
            <div className="extra-container">
                <HeaderSearchComponent />

                {user ? (
                    <div className="user-info">
                        <UserInfo>{user.user.username}</UserInfo>
                        <Button onClick={onLogout}>로그아웃</Button>
                    </div>
                ) : (
                    <div className="user-info">
                        <Button to="/login">로그인</Button>
                    </div>
                )}
            </div>
        </TopHeaderBlock>
    );
};
export default TopHeaderComponent;
