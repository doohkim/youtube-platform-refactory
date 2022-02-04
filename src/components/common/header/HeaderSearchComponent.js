import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const HeaderSearchComponentBlock = styled.form`
    display: flex;
    background: white;
    align-items: center;
    border-radius: 4px;
    width: 420px;
    height: 48px;
    border: 1px solid #e4e4e4;
    margin-right: 3rem;
    select {
        width: 82px;
        height: 48px;
        background: none;
        padding-left: 1.2rem;
        padding-top: 0.125rem;
        outline: none;
        border: none;
        color: gray;
        option {
            background: none;
            outline: none;
            border: none;
            color: white;
            background: gray;
        }
    }
    input {
        background: none;
        outline: none;
        border: none;
        padding-left: 1rem;
        font-size: 0.9rem;
        line-height: 1.5;
        color: gray;
        &::placeholder {
            color: #dee2e6;
        }
        flex: 1;
    }
    button {
        height: 48px;
        background: none;
        outline: none;
        border: none;
        /* background: #868e96; */
        color: gray;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        /* transition: 0.1s background ease-in; */
        /* &:hover {
            background: #adb5bd;
        } */
    }
`;
const HeaderSearchComponent = () => {
    return (
        <HeaderSearchComponentBlock>
            <select name="search_type">
                <option value="channel">채널</option>
                <option value="video">동영상</option>
            </select>
            <input
                placeholder="채널명 또는 관련 단어로 검색해주세요"
                name="keyword"
                // value="asdf"
            />
            <button type="submit">
                <BiSearch />
            </button>
        </HeaderSearchComponentBlock>
    );
};

export default HeaderSearchComponent;
