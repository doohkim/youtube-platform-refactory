import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
// import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { GiAlliedStar } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { BsPlayCircle } from 'react-icons/bs';


const AnalysisChannelPerformanceBlock = styled.div`
    width: 100%;
    display: flex;
    padding:1rem;


    .channel-performance-chart-block {
        border-right: 1px solid #dcdcdc;
        border-top: 1px solid #dcdcdc;
        padding-right: 25px;
        padding-top:1rem;
        width: 60%;
    }
    .channel-performance-short-info-block {
        border-top: 1px solid #dcdcdc;
        padding-top:2.5rem;
        width: 40%;
        padding-left: 25px;
        /* background-color: lightskyblue; */
        .channel-detail-grade-block {
            width: 100%;
            /* height: max-content; */
            .grade-top-block {
                display: flex;
                justify-content: flex-end;
                .subscribe-rank-block {
                    width: 44%;
                    background-color: #f7f7f7;
                    border-radius: 7px;
                    text-align: center;
                    padding: 15px 0 18px;

                    .subscriber-ranking {
                        font-size: 13px;
                        color: #666;
                    }
                    .ranking {
                        padding-top: 5px;
                        font-size: 18px;
                        font-weight: 700;
                    }
                    .ranking-percent {
                        font-size: 13px;
                    }
                }
            }
            .grade-bottom-block {
                margin-top: 20px;
                margin-left: 32px;

                .channel-space-between-block {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 8px;
                    font-size: 17px;
                    color: #000;
                    font-weight: 400;
                    line-height: 26px;
                    font-family: 'Noto Sans KR,sans-serif';
                    .left-th {
                        display: flex;

                        .th-img {
                            margin-top: 2px;
                            vertical-align: middle;
                            border-style: none;
                        }
                        .columns {
                            padding-left: 6px;
                        }
                    }
                    .right-td {
                        .values {
                            font-size: 20px;
                            font-weight: 550;
                        }
                    }
                }
            }
        }
    }
`;
const data = {
    labels: ['일일조회수', '영상별 평균 조회수', '조회수 증가율', '호감도'],
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
            data: [65, -59, 80, -81],
        },
    ],
};
const AnalysisChannelPerformanceComponent = ({
    channelDetail,
    channelDetailError,
    loading,
}) => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Performance 요약',
                font: {
                    size: 16,
                    color: '#212529',
                    position: 'left',
                    weight: 500,
                },
            },
            // callbacks: {
            //     title: (context) => context[0].label + '💙',
            //     label: (context) => {
            //         let label = context.dataset.label + '' || '';

            //         return context.parsed.y !== null
            //             ? label + ': ' + context.parsed.y + '배'
            //             : null;
            //     },
            // },
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
                // title:{
                //     display: true,
                //     align: 'end',
                //     font: {
                //         size: 12,
                //         family: "'Noto Sans KR', sans-serif",
                //         weight: 500,
                //     },

                //     text: '날짜',
                // }
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

                    text: '단위: %',
                },
            },
        },
    };
    return (
        <AnalysisChannelPerformanceBlock>
            <div className="channel-performance-chart-block">
                <Bar data={data} options={options} />
            </div>
            <div className="channel-performance-short-info-block">
                <div className="channel-detail-grade-block">
                    <div className="grade-top-block">
                        <div className="subscribe-rank-block">
                            <div className="subscriber-ranking">
                                유투부 구독자 순위
                            </div>
                            <div className="ranking">16 th</div>
                            <div className="ranking-percent">[TOP 1%]</div>
                        </div>
                        <div
                            className="subscribe-rank-block"
                            style={{ marginLeft: '4%' }}
                        >
                            <div className="subscriber-ranking">
                                유투부 수익 순위
                            </div>
                            <div className="ranking">70 th</div>
                            <div className="ranking-percent">[TOP 1%]</div>
                        </div>
                    </div>
                    <div className="grade-bottom-block">
                        <div className="channel-space-between-block">
                            <div className="left-th">
                                <div className="th-img">
                                    <GiAlliedStar size={17} />
                                </div>
                                <div className="columns">구독자 등급</div>
                            </div>
                            <div className="right-td">
                                <div className="values">다이아</div>
                            </div>
                        </div>
                        <div className="channel-space-between-block">
                            <div className="left-th">
                                <div className="th-img">
                                    <AiOutlineUser size={17} />
                                </div>
                                <div className="columns">구독자수</div>
                            </div>
                            <div className="right-td">
                                <div className="values">7220만</div>
                            </div>
                        </div>
                        <div className="channel-space-between-block">
                            <div className="left-th">
                                <div className="th-img">
                                    <MdDateRange size={17} />
                                </div>
                                <div className="columns">채널 가입일</div>
                            </div>
                            <div className="right-td">
                                <div className="values">2026-06-29</div>
                            </div>
                        </div>
                        <div className="channel-space-between-block">
                            <div className="left-th">
                                <div className="th-img">
                                    <BsPlayCircle size={17} />
                                </div>
                                <div className="columns">총 영상수</div>
                            </div>
                            <div className="right-td">
                                <div className="values">396</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnalysisChannelPerformanceBlock>
    );
};
export default AnalysisChannelPerformanceComponent;
