import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import AnalysisButtonComponent from './AnalysisButtonComponent';

const AnalysisVideoChartBlock = styled.div`
    width: 100%;
    padding-top: 0 15px;
    .video-upload-period-chart-block {
        .title-block {
            width: 100%;
            font-size: 16px;
            font-weight: 700;
            text-align: left;
            color: #212529;
        }
        .period-button-block {
            width: 100%;
            height: 35px;
            padding-right: 20px;
            padding-left: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin: 0 auto;
        }
        box-shadow: none;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        padding: 30px 35px;
        margin-top: 25px;
    }
`;
const data = {
    labels: [
        '2021-03',
        '2021-04',
        '2021-05',
        '2021-06',
        '2021-07',
        '2021-08',
        '2021-09',
        '2021-10',
        '2021-11',
        '2021-12',
    ],
    datasets: [
        {
            label: '블랙핑크 채널',
            type: 'bar',
            backgroundColor: 'rgba(255,99,132,1)',
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,0.4)',
            data: [1, 1, 1, 1, 2, 1, 1, 1, 3, 3, 3],
        },
    ],
};
// data label 길이가 12개이면 1년 30개이면 1개월로 하자
// data.length=== 30 or length ===12
const AnalysisVideoChartComponent = ({ title = 'BLACKPINK' }) => {
    const onSetting = useCallback((title) => {
        const options = {
            plugins: {
                title: {
                    display: true,
                    text: `${title} 영상 업로드 주기`,
                    font: {
                        size: 16,
                        color: '#212529',
                        position: 'top',
                        weight: 500,
                    },
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                        drawTicks: true,
                        tickLength: 4,
                        color: '#E2E2E230',
                    },
                    axis: 'x',
                    position: 'bottom',
                },
                y: {
                    type: 'linear',
                    stacked: true,
                    grid: {
                        color: '#E2E2E230',
                    },
                    axis: 'y',
                    display: true,
                    position: 'left',

                    title: {
                        display: true,
                        align: 'bottom',
                        color: '#808080',
                        font: {
                            size: 12,
                            family: "'Noto Sans KR', sans-serif",
                            weight: 500,
                        },

                        text: '단위: 개',
                    },
                },
            },
        };
        return options;
    });
    return (
        <AnalysisVideoChartBlock>
            <div className="video-upload-period-chart-block">
                <div className="title-block">
                    {`${title}유튜브 채널 구독자수 변화량`}
                </div>
                <div className="period-button-block">
                    <AnalysisButtonComponent selected={true} text={'1개월'}/>
                    <AnalysisButtonComponent text={'1년'}/>
                </div>
                <Bar data={data} options={() => onSetting(title)} />
            </div>
        </AnalysisVideoChartBlock>
    );
};
export default AnalysisVideoChartComponent;
