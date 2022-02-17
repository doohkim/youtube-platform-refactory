import React from 'react';
import styled from 'styled-components';
import { BiComment, BiLike } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';

const AnalysisProfileBlock = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -1.4rem;
    .banner-block {
        width: 100%;
    }
    .channel-profile-block {
        width: 1080px;
        display: flex;
        margin: auto;
        padding-top: 30px;
        padding-bottom: 10px;
        .short-profile-block {
            display: flex;
            .logo-block {
                width: 100px;
                height: 100px;
                img {
                    border-radius: 50%;
                }
            }
            .info-block {
                width: 75%;
                height: -webkit-max-content;
                height: max-content;
                padding-left: 15px;

                .title-block {
                    font-size: 24px;
                    margin-bottom: 5px;
                    margin-bottom: 0;
                    color: #212529;
                    overflow: hidden;
                    font-weight: 700;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .description-block {
                    font-size: 13px;
                    margin: 5px 0;
                    color: #212529;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    margin-bottom: 10px;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .category-block {
                    display: flex;
                    .tags-block {
                        margin: 0;
                        font-size: 14px;
                        font-family: Noto Sans KR, sans-serif;
                        color: #000;
                        font-weight: 400;
                        line-height: 26px;
                        span {
                            display: inline-block;
                            padding: 0 13px;
                            margin-right: 9px;
                            background: #f1f1f1;
                            border-radius: 15px;
                            font-size: 12px;
                            line-height: 25px;
                            color: #7d7d7d;
                        }
                    }
                }
            }
        }
        .link-block {
            display: flex;
            .link-btn {
                width: 55px;
                height: 55px;
                border: 1px solid black;
                img {
                }
            }
        }
    }
`;

const AnalysisProfileComponent = () => {
    return (
        <AnalysisProfileBlock>
            <div className="banner-block">
                <img src="https://yt3.ggpht.com/wMs1qwXoYZYHYfTqUjk_jIQy_wTRAlvVM2aNLYD7pQmvxbvmd5NUkaRygG5ZLG8T-lj5S1DY=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" />
            </div>
            <div className="channel-profile-block">
                <div className="short-profile-block">
                    <div className="logo-block">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLSHCtgoVkvbkntK7QjbGCT4FUrYTjGf1NQ_7VPEsA=s100-c-k-c0x00ffffff-no-rj-mo"
                            alt="logo"
                        />
                    </div>
                    <div className="info-block">
                        <div className="title-block">BLACKPINK</div>
                        <div className="description-block">
                            BLACKPINK Official YouTube Channel 블랙핑크 공식
                            유튜브 채널입니다. JISOO, JENNIE, ROSÉ, LISA 지수,
                            제니, 로제, 리사
                        </div>
                        <div className="category-block">
                            <div className="tags-block">
                                <span>음악</span>
                            </div>
                            <div className="tags-block">
                                <span>엔터테이먼트</span>
                            </div>
                        </div>

                        <div className="sns-block"></div>
                    </div>
                </div>
                <div className="link-block">
                    <div className="link-btn">
                        <BiLike size={55} />
                    </div>
                    <div className="link-btn">
                        <BiComment size={55} />
                    </div>
                    <div className="link-btn">
                        <BsShare size={55} />
                    </div>
                    <div className="link-btn">
                        <BiLike size={55} />
                    </div>
                </div>
            </div>
        </AnalysisProfileBlock>
    );
};
export default AnalysisProfileComponent;
