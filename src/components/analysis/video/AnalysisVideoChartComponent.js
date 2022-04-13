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

// data label 길이가 12개이면 1년 30개이면 1개월로 하자
// data.length=== 30 or length ===12
const AnalysisVideoChartComponent = ({channelDetail, channelDetailError }) => {
    const {
        // pk,
        // published_at,
        // channel_class,
        categories,
        title,
        // channel_likeability_index,
        channel_statistics,
        description,
        logo,
        video_upload_count,
    } = channelDetail;
    const { data, video_ea} = video_upload_count
    const uploadData = {
        labels: video_ea,
        datasets: [
            {
                label: `${title} 채널`,
                type: 'bar',
                backgroundColor: 'rgba(255,99,132,1)',
                // borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,0.4)',
                data: Array(video_ea.length).fill(1),
            },
        ],
    };
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
                <Bar data={uploadData} options={() => onSetting(title)} />
            </div>
        </AnalysisVideoChartBlock>
    );
};
export default AnalysisVideoChartComponent;
