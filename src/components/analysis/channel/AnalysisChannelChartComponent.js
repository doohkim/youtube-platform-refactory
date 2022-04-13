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

const AnalysisChannelChartComponent = ({
    channelDetail,
    channelDetailError,
}) => {
    const { title, channel_statistics } = channelDetail;

    let youtubeSubscriberIncreaseArr = [];
    let youtubeSubscriberIncreaseDateArr = [];

    channel_statistics.map((channel_statistic) => {
        youtubeSubscriberIncreaseArr.push(channel_statistic.subscriber_count);
        youtubeSubscriberIncreaseDateArr.push(
            channel_statistic.updated_at.split(' ')[0],
        );
    });
    const youtubeSubscriberIncreaseData = {
        labels: youtubeSubscriberIncreaseDateArr,
        datasets: [
            {
                label: `${title} 채널`,
                type: 'line',
                backgroundColor: 'rgba(255,99,132,1)',
                // borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,0.4)',
                data: youtubeSubscriberIncreaseArr,
            },
        ],
    };
    let youtubeDaliyViewCountIncreaseArr = [];
    let youtubeDaliyViewCountIncreaseDateArr = [];
    channel_statistics.map((channel_statistic) => {
        youtubeDaliyViewCountIncreaseArr.push(channel_statistic.view_count);
        youtubeDaliyViewCountIncreaseDateArr.push(
            channel_statistic.updated_at.split(' ')[0],
        );
    });
    const youtubeDaliyViewCountIncreaseData = {
        labels: youtubeDaliyViewCountIncreaseDateArr,
        datasets: [
            {
                label: `${title} 채널`,
                type: 'line',
                backgroundColor: 'rgba(255,99,132,1)',
                // borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,0.4)',
                data: youtubeDaliyViewCountIncreaseArr,
                // data: [
                //     view_count / 365,
                //     everageViewCountVideoCount,
                //     rateOfIncrease,
                //     like_ability,
                // ],
            },
        ],
    };

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
                <Line
                    data={youtubeSubscriberIncreaseData}
                    options={() => onSetting(title)}
                />
            </div>
            <div className="performance-chart-block">
                <div className="title-block">
                    {`${title} 유튜브 채널 일일 조회수 변화량`}
                </div>
                <Line
                    data={youtubeDaliyViewCountIncreaseData}
                    options={() => onSetting(title)}
                />
            </div>
            {/* <div className="performance-chart-block">
                <div className="title-block">
                    {`${title} 관련 유튜브 채널 활성도`}
                </div>
                <Line data={data} options={() => onSetting(title)} />
            </div> */}
        </AnalysisChannelChartBlock>
    );
};

export default AnalysisChannelChartComponent;
