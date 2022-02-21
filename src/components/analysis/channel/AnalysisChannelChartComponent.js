import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
const AnalysisChannelChartBlock = styled.div`
    width: 100%;
    /* background-color: lightgreen; */
    padding-top: 0 15px;
    .performance-chart-block {
        .title-block {
            width: 100%;
            font-size: 16px;
            font-weight: 700;
            text-align: left;
            color: #212529;
        }
        box-shadow: none;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        padding: 30px 35px;
        margin-top: 25px;
    }
    
   
`;
const data = {
    labels: ['일일조회수', '영상별 평균 조회수', '조회수 증가율', '호감도'],
    datasets: [
        {
            label: '블랙핑크 채널',
            type: 'line',
            backgroundColor: 'rgba(255,99,132,1)',
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,0.4)',
            data: [65, 70, 80, 91],
        },
    ],
};
const AnalysisChannelChartComponent = ({ title = '블랙핑크' }) => {
    const onSetting = useCallback((title) => {
        const options = {
            plugins: {
                title: {
                    display: true,
                    text: `${title}유튜브 채널 구독자수 변화량`,
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

                        text: '단위: 만',
                    },
                },
            },
        };
        return options;
    });
    return (
        <AnalysisChannelChartBlock>
            <div className="performance-chart-block">
                <div className="title-block">
                    {`${title}유튜브 채널 구독자수 변화량`}
                </div>
                <Line data={data} options={() => onSetting(title)} />
            </div>
            <div className="performance-chart-block">
                <div className="title-block">
                    {`${title}유튜브 채널 구독자수 변화량`}
                </div>
                <Line data={data} options={() => onSetting(title)} />
            </div>
            <div className="performance-chart-block">
                <div className="title-block">
                    {`${title}유튜브 채널 구독자수 변화량`}
                </div>
                <Line data={data} options={() => onSetting(title)} />
            </div>
        </AnalysisChannelChartBlock>
    );
};

export default AnalysisChannelChartComponent;
