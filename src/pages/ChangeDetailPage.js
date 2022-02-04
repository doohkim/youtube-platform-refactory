import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
const ChannelDetailPage = () => {
    return (
        <div>
            <div>채널 상세 페이지</div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};
export default ChannelDetailPage;
