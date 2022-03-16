import client from './client';

// 로그인
export const login = ({ username, password }) =>
    client.post('/members/login/', { username, password });

// 회원가입
export const register = ({ username, password }) =>
    client.post('/members/register/', {
        username,
        password,
    });
// 로그인 상태 확인
export const getToken = () =>
    client.get('/members/check/', {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });

export const logout = () =>
    client.get('/members/logout/', {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });

export const profileUpdate = ({ address }) =>
    client.post(
        '/members/update/',
        { address },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
