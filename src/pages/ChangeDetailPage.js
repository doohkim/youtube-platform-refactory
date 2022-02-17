import React from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
const ChannelDetailPage = () => {
    return (
        <div>
            <div>채널 상세 페이지</div>
            <div>
                <Link to="" style={{marginRight: 16}}>channel</Link>
                <Link to="video">video</Link>
            </div>
            <div>
                 {/* container 하나 만들고 그안에 Outlet 만들어 보기 */}
                <Outlet />
            </div>
        </div>
    );
};
export default ChannelDetailPage;
