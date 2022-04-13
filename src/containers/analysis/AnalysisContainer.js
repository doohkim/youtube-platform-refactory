import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import AnalysisMenuComponent from '../../components/analysis/AnalysisMenuComponent';
import AnalysisProfileComponent from '../../components/analysis/AnalysisProfileComponent';
import { readChannel, unloadChannel } from '../../modules/channel';

const AnalaysisContainer = () => {
    const [subCategory, setSubCategory] = useState('');
    const onSubSelect = useCallback(
        (subCategory) => setSubCategory(subCategory),
        [subCategory],
    );
    const { channelId } = useParams();
    const dispatch = useDispatch();
    const { channelDetail, channelDetailError, isLoading } = useSelector(
        ({ channel, loading }) => ({
            channelDetail: channel.channelDetail,
            channelDetailError: channel.channelDetailError,
            isLoading: loading['channel/READ_CHANNEL'],
        }),
    );

    useEffect(() => {
        dispatch(unloadChannel());
    }, [dispatch]);

    useEffect(() => {
        if (channelId) {
            dispatch(readChannel(channelId));
        }
    }, [dispatch, channelId]);
    console.log('analysis container ', channelDetail);
    return (
        <>
            {!isLoading && channelDetail && <AnalysisProfileComponent 
                channelDetail={channelDetail}
                channelDetailError={channelDetailError}
            />}
            <AnalysisMenuComponent
                subCategory={subCategory}
                onSubSelect={onSubSelect}
            />
            <Outlet context={[channelDetail, channelDetailError, isLoading]} />
        </>
    );
};
export default AnalaysisContainer;
