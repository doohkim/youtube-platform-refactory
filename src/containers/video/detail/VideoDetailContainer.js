import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from '../../../../node_modules/react-router/index';
import VideoContentComponent from '../../../components/video/detail/VideoContentComponent';
import VideoIframeComponent from '../../../components/video/detail/VideoIframeComponent';
import { readVideo, unloadVideo } from '../../../modules/video';



const VideoDetailContainer = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(1);
    const { videoId } = useParams()
    const dispatch = useDispatch();
    const {
        videoDetail,
        videoDetailError,
        videoReadLoading,

    } = useSelector(({ video, loading }) => ({
        videoDetail: video.videoDetail,
        videoDetailError: video.videoDetailError,
        videoReadLoading: loading['video/READ_VIDEO'],
    }));

    useEffect(() => {
        dispatch(unloadVideo());
    }, [dispatch]);

    useEffect(() => {
        if (videoId) {
            dispatch(readVideo(videoId));
        }
    }, [dispatch, videoId]);

    return (
        <>
            <VideoIframeComponent
                videoDetail={videoDetail}
                videoDetailError={videoDetailError}
                loading={videoReadLoading}
            />
            <VideoContentComponent
                setPage={setPage}
                page={page}
                setSort={setSort}
                sort={sort}
                videoDetail={videoDetail}
                videoDetailError={videoDetailError}
                loading={videoReadLoading}
            />
        </>
    );
};
export default VideoDetailContainer;
