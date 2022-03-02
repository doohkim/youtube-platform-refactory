import React from 'react';
import styled from 'styled-components';

const PostGoodsTipsBlock = styled.div`
    width: 100%;
    border: 1px solid #b9b9b9;
    margin-bottom: 170px;
    padding: 50px;

    .tips-title-block {
        font-size: 50px;
        width: 100%;
        margin-bottom: 70px;
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        font-weight: 700;
        color: #666;
        .tips-title {
            padding: 0 15px;
            background-color: #fff;
            text-shadow: 2px 0;
        }
    }
    .words-block{
        font-size: 18px;
        margin: 0%;
        line-height:32px;
        strong{
            display: block;
            font-size: 25px;
            line-height: 38px;
            margin-bottom: 10px;
        }

    }
`;

const PostGoodsTipsComponent = () => {
    const tips = "유의사항\n・제품 특성 상 부유물이나 침전물이 생길 수 있어요. 품질에는 이상이 없으니 잘 흔들어 드세요.".split('\n')
    return (
        <PostGoodsTipsBlock>
            <div className="tips-title-block">
                <div className="tips-title">Kurly's Tips Point</div>
            </div>
            <div className="words-block">
                <strong>{tips[0]}</strong>
                <b>{tips[1][0]}</b>&nbsp;{tips[1].slice(1,)}
            </div>

        </PostGoodsTipsBlock>
    );
};

export default PostGoodsTipsComponent;
