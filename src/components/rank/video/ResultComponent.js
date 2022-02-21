import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import VideoItemComponent from './VideoItemComponent';

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
const ResultComponent = ({ dataList, dataListError, loading }) => {
    console.log(dataList)
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
                dataList.results.map((video, index) => (
                    <VideoItemComponent
                        key={index}
                        index={index}
                        videoInfo={video}
                    />
                ))}
        </ResultBlock>
    );
};
export default ResultComponent;
