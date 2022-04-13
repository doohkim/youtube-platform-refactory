import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import VideoDetailItemComponent from './VideoDetailItemComponent';

const ResultBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: lightskyblue; */
    border-top: 1px solid black;
`;
const VideoListErrorBlock = styled.div`
    width: 1080px;
    background: gray;
`;
const VideoDetailResultComponent = ({ dataList, dataListError, loading }) => {
    
    const navigate = useNavigate();
    if (dataListError) {
        navigate('');
        return (
            <VideoListErrorBlock>
                컨텐츠 에러가 발생했습니다.
            </VideoListErrorBlock>
        );
    }
    return (
        <ResultBlock>
            {!loading &&
                dataList &&
                dataList.channel.videos.map((video, index) => (
                    <VideoDetailItemComponent
                        key={index}
                        index={index}
                        videoInfo={video}
                        channelInfo={dataList.channel}
                    />
                ))}
        </ResultBlock>
    );
};
export default VideoDetailResultComponent;
