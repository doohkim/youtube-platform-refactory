import React from 'react';
import styled from 'styled-components';

const PostGoodsIntroBlock = styled.div`
    width: 100%;
    padding-top: 40px;
    min-height: 500px;
    margin-bottom: 50px;
    .goods-block {
        display: flex;
        justify-content: center;
        width: 100%;
        font-family: noto sans;
        font-weight: 200;
        letter-spacing: 0;
        /* img{

            } */
    }
    .context-block {
        margin-bottom: 170px;
        h3 {
            display: block;
            margin: 75px 0 0;
            padding-bottom: 35px;
            font-size: 38px;
            line-height: 46px;
            text-align: center;
            border-bottom: 1px solid #c1c1c1;
            color: #666;
            small {
                display: block;
                font-size: 24px;
                margin-bottom: 14px;
                line-height: 15px;
            }
        }
        .word-block {
            margin-top: 28px;
            font-size: 18px;
            line-height: 32px;
            color: #373737;
        }
    }
`;

const PostGoodsIntroComponent = () => {
    return (
        <PostGoodsIntroBlock>
            <div className="goods-block">
                <img
                    src="https://img-cf.kurly.com/shop/data/goodsview/20211224/gv30000261825_1.jpg"
                    alt="product-image"
                />
            </div>
            <div className="context-block">
                <h3>
                    <small>간편하게 맛보는 달콤한 풍미</small>
                    [폴 바셋]
                    <br />
                    바리스타 돌체라떼
                </h3>
                <div className="word-block">
                    부드럽고 깔끔한 뒷맛을 자랑하는 폴 바셋. 이번에는 폴 바셋
                    매장 인기 메뉴인 스페니쉬 라떼를 재현한 바리스타 돌체라떼를
                    선보입니다. 국산 원유와 폴 바셋만의 노하우가 담긴 시그니처
                    에스프레소 추출액에 연유를 더해 부드럽고 달콤하게
                    완성했어요. 휴대가 간편한 패키지에 담겨 있어 가방에 한 개씩
                    쏙 챙기기에도 좋고요. 커피의 향과 신선함 또한 고스란히
                    유지했기에, 언제 어디서나 폴 바셋의 깊고 진한 풍미를 만끽할
                    수 있을 거예요.
                </div>
            </div>
        </PostGoodsIntroBlock>
    );
};
export default PostGoodsIntroComponent;
