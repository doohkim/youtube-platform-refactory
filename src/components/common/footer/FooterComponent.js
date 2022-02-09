import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/index';

const FooterBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    /* background-color: lightyellow; */
    width: 100%;
    border-top: 1px solid lightgray;
    .footer-top {
        margin-left: 1rem;
        margin-bottom: 30px;
        font-size: 13px;
        display: flex;
        align-items: center;
        .footer-right-border {
            height: 14px;
            border-left: 1px solid;
            border-color: #d9d9d9;
            margin: 0 10px;
        }
    }
    .footer-middle {
        font-size: 11px;
        display: flex;
        margin-left: 1rem;
        color: #4f4f4f;
        margin-top: 10px;
        /* align-items: center; */
        .footer-middle-title {
        }
        .footer-border {
            height: 14px;
            border-left: 1px solid;
            border-color: #d9d9d9;
            margin: 0 10px;
        }
    }
`;

const FooterComponent = () => {
    return (
        <FooterBlock>
            <div className="footer-top">
                <div className="lumen-intro">
                    <Link to="#">루멘소개</Link>
                </div>
                <div className="footer-right-border" />
                <div className="lumen-intro">
                    <Link to="#">이용약관</Link>
                </div>
                <div className="footer-right-border" />
                <div className="lumen-intro">
                    <Link to="#">고객문의</Link>
                </div>
                <div className="footer-right-border" />
                <div className="lumen-intro">
                    <Link to="#">개인정보처리방침</Link>
                </div>
            </div>
            <div className="footer-middle">
                <div className="footer-middle-title">
                    {' 상호명 : (주)루멘페이먼츠 '}
                </div>
                <div className="footer-border" />
                <div className="footer-middle-title">
                    {' 대표이사 : 김인환'}
                </div>
                <div className="footer-border" />
                <div className="footer-middle-title">
                    {' 사업자등록번호 : 707-81-01787'}
                </div>
                <div className="footer-border" />
            </div>
            <div className="footer-middle">
                <div className="footer-middle-title">
                    {
                        ' 주소 : 서울특별시 동작구 상도로 13, 4층(대방동, 프라임빌딩)'
                    }
                </div>
                <div className="footer-border" />
                <div className="footer-middle-title">
                    {' 제휴문의 : 1566-0278'}
                </div>
                <div className="footer-border" />
                <div className="footer-middle-title">
                    {' Email : rlsmdtjstn@naver.com'}
                </div>
                <div className="footer-border" />
            </div>
            <div className="footer-middle">
                <div className="footer-middle-title">
                    {'@2022 Your Company. All Rights Reserved.'}
                </div>
            </div>
        </FooterBlock>
    );
};

export default FooterComponent;
