import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import BottomHeaderComponent from './BottomHeaderComponent';
import TopHeaderComponent from './TopHeaderComponent';

const HeaderBlock = styled.div`
    width: 1080px;
    /* border: 1px solid red; */
    position: fixed;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
    height: 8rem;
`;

const HeaderComponent = ({ user, onLogout }) => {
    const [category, setCategory] = useState('channel');
    const onSelect = useCallback((category) => setCategory(category), []);
    return (
        <>
            <HeaderBlock>
                <TopHeaderComponent user={user} onLogout={onLogout} />
                <BottomHeaderComponent
                    category={category}
                    onSelect={onSelect}
                />
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default HeaderComponent;
