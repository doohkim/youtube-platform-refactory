import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsPlay } from 'react-icons/bs';

const VideoItemBlock = styled.div`
    align-items: center;
    width: 23%;
    margin: 1% 1% 4%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* background-color: aliceblue; */
    .thumbnail-block {
        cursor: pointer;
        width: 100%;
        display: flex;
        
        .thumbnail-link {
            position: relative;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            /* background-color: #eee; */

            img {
                width: 100%;
                height: auto;
                vertical-align: middle;
                border-style: none;
                border-radius: 5px;
            }
        }
    }
    .profile-block {
        display: flex;
        flex-direction: column;
        width: 100%;

        .title-block {
            display: block;
            margin: 10px 0 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            .text {
                font-size: 14px;
                font-weight: 500;
                text-align: left;
                color: #212529;
            }
        }
        .info-block {
            text-decoration: none;
            cursor: pointer;
            display: block;
            width: 248px;
            .channel-block {
                margin: 10px 0 0;
                display: flex;
                .logo-block {
                    width: 39px;
                    height: 39px;
                    border-radius: 50%;
                    img {
                        border-radius: 50%;
                        width: 39px;
                    }
                }
                .channel-info {
                    width: 248px;
                    margin: 0 0 0 10px;
                    font-size: 15px;
                    text-align: left;
                    color: #212529;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .title {
                        width: 248px;
                        font-weight: 500;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .view-block {
                        display: flex;
                        .view {
                            margin-right: 15px;
                        }
                        img {
                            width: 8px;
                            height: 10px;
                            margin-top: 5px;
                            margin-right: 2px;
                        }
                        span {
                            font-size: 13px;
                            color: #696969;
                        }
                    }
                }
            }
        }
    }
`;

const VideoDetailItemComponent = ({ videoInfo, channelInfo }) => {
    const { title, thumbnail, published_at, video_statistics } =
        videoInfo;
    
    const { view_count } = video_statistics;

    return (
        <VideoItemBlock>
            <div className="thumbnail-block">
                <Link to="#" className="thumbnail-link">
                    <img
                        src={thumbnail.replace(
                            'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                            'https://',
                        )}
                        alt="video-thumbnail"
                    />
                </Link>
            </div>
            <div className="profile-block">
                <div className="title-block">
                    <span className="text">{title}</span>
                </div>
                <Link to="#" className="info-block">
                    <div className="channel-block">
                        <div className="logo-block">
                            <img
                                src={channelInfo.logo.replace(
                                    'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                                    'https://',
                                )}
                                alt="channel-logo"
                            />
                        </div>
                        <div className="channel-info">
                            <div className="title">{channelInfo.title}</div>
                            <div className="view-block">
                                <BsPlay />
                                <span className="view">{view_count}</span>
                                <span>{published_at}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </VideoItemBlock>
    );
};
export default VideoDetailItemComponent;
