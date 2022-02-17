import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AnalysisPage from './pages/AnalysisPage';
import ChannelDetailPage from './pages/ChangeDetailPage';
import ChannelListPage from './pages/ChannelListPage';
import CustomerServicePage from './pages/CustomerServicePage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import VideoAnalysisPage from './pages/VideoAnalysisPage';
import VideoDetailPage from './pages/VideoDetailPage';
import VideoListPage from './pages/VideoListPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ChannelListPage />} />
                    <Route path="/video" element={<VideoListPage />} />
                    <Route path="/market" element={<PostListPage />} />
                    <Route path="service" element={<CustomerServicePage />} />
                    <Route path="/detail/video/:videoId" element={<VideoDetailPage />} />
                    <Route path="/analysis/:channelId/*" element={<ChannelDetailPage />}>
                        <Route path="" element={<AnalysisPage />} />
                        <Route path="video" element={<VideoAnalysisPage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
