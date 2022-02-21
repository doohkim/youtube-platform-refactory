import React from 'react';
import styled from 'styled-components';
import { BsPlayCircle } from 'react-icons/bs';
import { FiPlay } from 'react-icons/fi';
import { FaRegCommentDots, FaRegThumbsUp } from 'react-icons/fa';

const AnalysisVideoInfoBlock = styled.div`
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    padding: 20px 25px 25px;
    margin-bottom: 20px;
    .channel-title-block {
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        color: #212529;
    }
    .channel-average-info-block {
        width: 100%;
        padding: 0 0 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .video-part-block {
            width: 15%;
            border-right: 1px solid #d2d2d2;
            font-size: 14px;
            font-family: sans-serif;
            color: #000;
            font-weight: 400;
            line-height: 26px;
            .video-number-block {
                font-size: 20px;
                font-weight: 700;
            }
            .video-column-block {
                display: flex;
                font-size: 12px;
                justify-content: center;

                .column-img-block {
                    display: flex;
                    align-items: center;
                    padding-bottom: 2px;
                    img {
                        border-style: none;
                    }
                }
                .column-text-block {
                    padding-left: 5px;
                }
            }
        }
    }
`;
const AnalysisVideoInfoComponent = () => {
    return (
        <AnalysisVideoInfoBlock>
            <div className="channel-title-block">
                BLACKPINK 채널 영상 퍼포먼스
            </div>
            <div className="channel-average-info-block">
                <div className="video-part-block">
                    <div className="video-number-block">10</div>
                    <div className="video-column-block">
                        <div className="column-img-block">
                            <BsPlayCircle />
                        </div>
                        <div className="column-text-block">영상수</div>
                    </div>
                </div>

                <div className="video-part-block">
                    <div className="video-number-block">3,328,926</div>
                    <div className="video-column-block">
                        <div className="column-img-block">
                            <FiPlay />
                        </div>
                        <div className="column-text-block">영상평균조회수</div>
                    </div>
                </div>

                <div className="video-part-block">
                    <div className="video-number-block">31,680</div>
                    <div className="video-column-block">
                        <div className="column-img-block">
                            <FaRegCommentDots />
                        </div>
                        <div className="column-text-block">평균 댓글수</div>
                    </div>
                </div>

                <div className="video-part-block">
                    <div className="video-number-block">635,346</div>
                    <div className="video-column-block">
                        <div className="column-img-block">
                            <FaRegThumbsUp />
                        </div>
                        <div className="column-text-block">평균 좋아요 수</div>
                    </div>
                </div>
            </div>
        </AnalysisVideoInfoBlock>
    );
};
export default AnalysisVideoInfoComponent;
