import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    
    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value,
            }),
        );
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;

        // 하나라도 비어 있다면
        if ([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        // 비밀번호가 일치하지 않는다면
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(
                changeField({ form: 'register', key: 'password', value: '' }),
            );
            dispatch(
                changeField({
                    form: 'register',
                    key: 'passwordConfirm',
                    value: '',
                }),
            );
            return;
        }
        dispatch(register({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (authError) {
            // django status 409 날려주기
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다.');
                console.log('통과');
                return;
            }
            setError('회원가입 실패');
            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            sessionStorage.setItem('token', auth.token);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    // user 값이 잘 설정되었는지 확인
    useEffect(() => {
        if (user) {
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('Register local storage is not working');
            }
            navigate('/');
        }
    }, [navigate, user]);
    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};
export default RegisterForm;
