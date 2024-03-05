import React, { useState } from "react";
import InputText from "../../components/common/Input/InputText";
import Button from "../../components/common/Button/Button";
import { useLocation, useNavigate } from 'react-router-dom';
import AuthApi from "../../api/Common/authApi";

const Login = ({ businessHomeUrl, adminHomeUrl }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await AuthApi.login(email, password);
            console.log('로그인 성공:', response);
            const token = response.data.data.accessToken;
            if (location.state?.buttonText === '관리자 페이지') {
                localStorage.setItem('adminToken', token);
                navigate(adminHomeUrl);
            } else if (location.state?.buttonText === '사업체 페이지') {
                localStorage.setItem('userToken', token);
                navigate(businessHomeUrl);
            }
            setLoginError(''); // 로그인 성공시 에러 메시지 초기화
        } catch (error) {
            setLoginError('로그인 실패: 아이디나 비밀번호를 확인해주세요.');
        }
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="login">
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-main-color-600 pt-2 pb-6 md:text-2xl">
                                {location.state?.buttonText === '사업체 페이지' ? '사업체 로그인' : '관리자 로그인'}
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <InputText
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="아이디"/>
                                <InputText
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleEnterKeyPress}
                                    placeholder="비밀번호"/>
                                {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
                                <div className="pt-4">
                                    <Button onClick={handleLogin} text="로그인"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
