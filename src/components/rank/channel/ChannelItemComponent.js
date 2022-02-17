import React from 'react';
import styled from 'styled-components';
import { BsStar, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
    AiOutlinePlayCircle,
    AiFillInstagram,
    AiFillYoutube,
    AiFillFacebook,
    AiFillStar,
} from 'react-icons/ai';
const ChannelItemBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    padding: 30px 20px;
    border-bottom: 1px solid #d9d9d9;
    align-items: center;
    .channel-card-top-area {
        display: flex;
        height: 110px;
        width: 100%;
        align-items: center;
        .channel-card-rank-wrap {
            width: 8%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .channel-card-last-action-btns-top {
                display: flex;
                height: 50%;
                justify-content: center;
                align-items: flex-start;
                /* margin-left: 10px; */
                .starBtn {
                    width: 30px;
                    height: 30px;
                }
            }
            .channel-card-rank {
                color: #212529;
                font-size: 23px;
                font-weight: 900;
                text-align: center;
                /* margin-left: 10px; */
            }
        }
        .channel-card-thumbnails-wrap {
            min-width: 90px;
            width: 90px;
            height: 90px;
            position: relative;
            margin: 0 15px;
            cursor: pointer;
            .channel-card-thumbnails {
                width: 100%;
                height: auto;
                border-radius: 50%;
            }
        }
        .channel-card-info-wrap {
            width: 33%;
            height: auto;
            flex: 1;
            overflow: hidden;
            .title-block {
                display: block;
                .channel-card-info-title {
                    width: 100%;
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 26px;
                    color: #212529;
                    text-overflow: ellipsis;
                    overflow: hidden;

                    white-space: nowrap;
                }
            }
            .channel-card-info-desc {
                margin: 5px 0;

                .desc-block {
                    width: 100%;
                    color: #212529;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 400;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .channel-card-category {
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
            .channel-card-info-action-btns {
                display: flex;
                width: 100%;
                height: 30px;
                align-items: center;
                margin-top: 6px;
                .channel-card-info-action-btns-half-front {
                    display: flex;
                    .sns-block {
                        display: block;
                        width: 20px;
                        height: 20px;
                        margin-right: 6px;
                        overflow: hidden;
                        border-radius: 50%;
                        .channel-card-info-link-img {
                            width: 100%;
                            vertical-align: initial;
                        }
                    }
                }
            }
        }
        .channel-card-info-status {
            width: 287px;
            margin-left: 40px;
            border-right: 1px solid #d9d9d9;
            margin-right: 16px;
            display: flex;
            flex-direction: column;
            margin-top: 2rem;
            /* margin: auto; */

            .channel-card-info-status-wrap-sub {
                display: flex;
                margin-bottom: 18px;
                .channel-card-info-status-title {
                    width: 130px;
                    margin-top: 0;
                    display: flex;
                    font-size: 14px;
                    flex-direction: row;
                    .title-img {
                    }
                }
                .channel-card-info-status-value {
                    font-weight: 600;
                    font-size: 18px;
                    text-align: right;
                    color: #212529;
                    width: 80px;
                    margin-right: 10px;
                }
                .channel-card-info-status-change {
                    width: 80px;
                    font-weight: 500;
                    font-size: 13px;
                    color: #0f9d58;
                    display: flex;
                    flex-direction: row;
                    flex: 1 1;
                    align-items: center;
                    .status-change-img {
                    }
                }
            }
            .channel-card-info-status-wrap-dailyview {
                display: flex;
                margin-bottom: 18px;
            }
            .channel-card-info-status-wrap-avgviews {
                border-right: 0;
            }
        }
        .channel-card-info-video-wrap {
            display: flex;
            width: 185px;
            min-width: 185px;
            height: 100%;
            justify-content: center;
            align-items: center;
            .video-link {
                display: block;
                position: relative;
                overflow: hidden;
                border-radius: 5px;
                padding-bottom: 54.5%;
                width: 100%;
                img {
                    width: 100%;
                    position: absolute;
                }
            }
        }
    }
`;
const ChannelItemComponent = ({ channelInfo, index }) => {
    const { videos } = channelInfo;
    // const { thumbnail } = videos;
    // console.log(videos&& videos.id,channelInfo.title)
    return (
        <ChannelItemBlock>
            <div className="channel-card-top-area">
                <div className="channel-card-rank-wrap">
                    <div className="channel-card-last-action-btns-top">
                        <div className="starBtn">
                            <BsStar size={30} />
                        </div>
                    </div>
                    <p className="channel-card-rank">{index + 1}</p>
                </div>
                <div className="channel-card-thumbnails-wrap">
                    <Link to={`/analysis/${channelInfo.pk}`}>
                        <img
                            className="channel-card-thumbnails"
                            src={channelInfo.logo.replace(
                                'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                                'https://',
                            )}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="channel-card-info-wrap">
                    <Link
                        to={`/analysis/${channelInfo.pk}`}
                        className="title-block"
                    >
                        <div className="channel-card-info-title">
                            {channelInfo.title}
                        </div>
                    </Link>
                    <div className="channel-card-info-desc">
                        <Link
                            to={`/analysis/${channelInfo.pk}`}
                            className="desc-block"
                        >
                            {channelInfo.description}
                        </Link>
                    </div>
                    <p className="channel-card-category">
                        {channelInfo.categories.map((category, index) => (
                            <span key={index}>{category.kind_hangle}</span>
                        ))}
                    </p>
                    <div className="channel-card-info-action-btns">
                        <div className="channel-card-info-action-btns-half-front">
                            <Link
                                onClick={() =>
                                    window.open(
                                        `https://www.youtube.com/c/${channelInfo.title}`,
                                    )
                                }
                                to="#"
                                className="sns-block"
                            >
                                <AiFillYoutube className="channel-card-info-link-img" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="channel-card-info-status">
                    <div className="channel-card-info-status-wrap-sub">
                        <div className="channel-card-info-status-title">
                            <div className="title-img">
                                <BsFillPersonFill size={20} />
                            </div>
                            <div>구독자수</div>
                        </div>
                        <div className="channel-card-info-status-value">
                            {Math.round(
                                channelInfo.channel_statistics
                                    .subscriber_count / 10000,
                            ) + '만'}
                        </div>
                        <div className="channel-card-info-status-change">
                            <div className="status-change-img">
                                <AiOutlineArrowUp />
                            </div>
                            <div>
                                {Math.round(
                                    channelInfo.channel_statistics
                                        .diff_subscriber_count / 10000,
                                ) + '만'}
                            </div>
                        </div>
                    </div>
                    <div className="channel-card-info-status-wrap-sub">
                        <div className="channel-card-info-status-title">
                            <div className="title-img">
                                <FiPlay size={20} />
                            </div>
                            <div>일일 조회수</div>
                        </div>
                        <div className="channel-card-info-status-value">
                            {Math.round(
                                channelInfo.channel_statistics.view_count /
                                    10000000,
                            ) + '만'}
                        </div>
                        <div className="channel-card-info-status-change">
                            <div className="status-change-img">
                                <AiOutlineArrowUp />
                            </div>
                            <div>
                                {Math.round(
                                    channelInfo.channel_statistics
                                        .diff_view_count / 10000,
                                ) + '만'}
                            </div>
                        </div>
                    </div>
                    <div className="channel-card-info-status-wrap-sub">
                        <div className="channel-card-info-status-title">
                            <div className="title-img">
                                <BsFillPersonFill size={20} />
                            </div>
                            <div>영상별 평균 조회수</div>
                        </div>
                        <div className="channel-card-info-status-value">
                            {Math.round(
                                channelInfo.channel_statistics.view_count /
                                    channelInfo.channel_statistics.video_count /
                                    10000,
                            ) + '만'}
                        </div>
                        <div className="channel-card-info-status-change"></div>
                    </div>
                    <div className="channel-card-info-status-wrap-dailyview"></div>
                    <div className="channel-card-info-status-wrap-avgviews"></div>
                </div>
                <div className="channel-card-info-video-wrap">
                    <Link
                        to={videos ? `/detail/video/${videos.id}` : '#'}
                        className="video-link"
                    >
                        {videos === null ? (
                            <img
                                className="not-video"
                                src="https://i.ytimg.com/vi/0pJ1oD-OXZo/mqdefault.jpg"
                                alt="thumbnail"
                            />
                        ) : (
                            <img src={videos.thumbnail} alt="thumbnail" />
                        )}
                    </Link>
                </div>
            </div>
        </ChannelItemBlock>
    );
};

export default ChannelItemComponent;
