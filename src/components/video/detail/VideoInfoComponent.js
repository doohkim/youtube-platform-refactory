import React from 'react';
import styled from 'styled-components';
import { BiComment, BiLike } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const VideoInfoBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 2rem 2rem;

    .video-info-block {
        display: flex;

        /* background-color: lightcyan; */
        .video-info-first-block {
            width: 70%;
            flex: 1 1;
            .video-view-block {
                font-size: 14px;
                display: flex;
                align-items: center;
                .view-block {
                    box-sizing: border-box;
                    span {
                        color: #f88e9c;
                    }
                }
                .view-wall {
                    height: 1rem;
                    width: 1px;
                    background-color: #e6e6e6;
                    display: block;
                    margin: 0 10px;
                }
                .date-block {
                    box-sizing: border-box;
                }
            }
            .video-title-block {
                flex: 1 1;
                font-size: 19px;
                font-weight: 700;
                text-align: left;
                color: #4f4f4f;
            }
        }
        .video-like-comment-block {
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .icon-block {
                height: 1rem;
                width: 1px;
                background-color: #e6e6e6;
            }
            span {
                font-size: 12px;
                text-align: center;
                color: #545454;
                padding-top: 5px;
            }
            div {
                margin: 0 0 0 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .video-like-block {
            }
            .video-comment-block {
            }
            .video-share-block {
            }
        }
    }
    .video-description-block {
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 70%;
        white-space: normal;
    }
    .video-tags-block {
        margin: 5px 0 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        .video-tag {
            margin: 10px 10px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            height: 30px;
            border-radius: 14.3px;
            border: 1px solid #d9d9d9;
            .tag-block {
                font-size: 12px;
                text-align: center;
                color: #4f4f4f;
            }
        }
    }
    .video-channel-profile-block {
        margin: 30px 0 0;
        display: flex;
        .channel-logo {
            width: 45px;
            height: 45px;
            box-sizing: border-box;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .channel-profile-block {
            margin: 0 0 0 10px;
            display: flex;
            flex-direction: column;
            .channel-title-block {
                box-sizing: border-box;
                .channel-link {
                    font-size: 17px;
                    font-weight: 700;
                    text-align: left;
                    color: #4f4f4f;
                }
            }
            .channel-view-block {
                display: flex;
                align-items: center;
                font-size: 14px;
                text-align: left;
                color: #787777;
            }
        }
    }
`;
const ErrorBlock = styled.div`
    width: 1080px;
    height: 100px;
    background: gray;
`;
const VideoInfoComponent = ({ videoDetail, videoDetailError, loading }) => {
    const { channel, video_statistics } = videoDetail;
    const navigate = useNavigate();

    if (videoDetailError) {
        navigate('/');
        return <ErrorBlock>에러가 발생했습니다.</ErrorBlock>;
    }
    return (
        <VideoInfoBlock>
            <div className="video-info-block">
                <div className="video-info-first-block">
                    <div className="video-view-block">
                        <div className="view-block">
                            조회수 <span>{video_statistics[0].view_count}</span>
                        </div>
                        <div className="view-wall"></div>
                        <div className="date-block">
                            {videoDetail.published_at}
                        </div>
                    </div>
                    <div className="video-title-block">{videoDetail.title}</div>
                </div>
                <div className="video-like-comment-block">
                    <div className="video-like-block">
                        <BiLike size={27} />
                        <span>{video_statistics[0].like_count}</span>
                    </div>
                    <div className="icon-block" />
                    <div className="video-comment-block">
                        <BiComment size={27} />
                        <span>{video_statistics[0].comment_count}</span>
                    </div>
                    <div className="icon-block" />
                    <div className="video-share-block">
                        <BsShare size={27} />
                        <span>공유</span>
                    </div>
                </div>
            </div>
            <div className="video-description-block">
                {videoDetail.description}
            </div>
            <div className="video-tags-block">
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        kbs
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        kbsworld
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        kbs world V
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        KBSWorld
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        KBS
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        kbsworldTV
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        kbs월드
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        월드TV
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        kbs 월드
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        KBS WORLD TV
                    </Link>
                </div>
                <div className="video-tag">
                    <Link to="#" className="tag-block">
                        world tv
                    </Link>
                </div>
            </div>
            <div className="video-channel-profile-block">
                <div className="channel-logo">
                    <img
                        src={channel.logo.replace(
                            'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                            'https://',
                        )}
                        alt="channel-logo"
                    />
                </div>
                <div className="channel-profile-block">
                    <div className="channel-title-block">
                        <Link to="#">{channel.title}</Link>
                    </div>
                    <div className="channel-view-block">
                        <Link to="#">{channel.channel_statistics[0].subscriber_count/10000}만</Link>
                    </div>
                </div>
            </div>
        </VideoInfoBlock>
    );
};
export default VideoInfoComponent;
