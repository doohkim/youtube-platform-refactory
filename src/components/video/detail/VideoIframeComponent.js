import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const VideoIframeBlock = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    iframe {
        width: 1020px;
        height: 591px;
    }
`;
const ErrorBlock = styled.div`
    width: 1080px;
    height: 100px;
    background: gray;
`;
const VideoIframeComponent = ({ videoDetail, videoDetailError, loading }) => {
    const navigate = useNavigate();

    if (videoDetailError) {
        navigate('/');
        return <ErrorBlock>에러가 발생했습니다.</ErrorBlock>;
    }

    return (
        <VideoIframeBlock>
            {!loading && videoDetail && (
                <iframe
                    width="1080"
                    height="591"
                    src={`https://youtube.com/embed/${videoDetail.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </VideoIframeBlock>
    );
};
export default VideoIframeComponent;
