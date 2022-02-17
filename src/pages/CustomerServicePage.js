import React from 'react';
import { Outlet } from 'react-router-dom';
const CustomerServicePage = () => {
    return (
        <div>
            <div>고객문의 페이지</div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};
export default CustomerServicePage;
