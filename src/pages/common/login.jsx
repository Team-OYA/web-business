import React from "react";
import InputText from "../../components/common/Input/InputText";
import Button from "../../components/common/Button/Button";
import OutlineCircleDisabledButton from "../../components/common/Button/OutlineCircleDisabledButton";

import { useLocation } from 'react-router-dom';

/**
 * Login 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const Login = () => {

    const location = useLocation();
    const buttonText = location.state?.buttonText || 'Default Text';

    return (
        <div className="login">
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-main-color-600 md:text-2xl">
                                THE POP
                            </h1>
                            <p className="text-center text-main-color-600">
                                현대에서 진행하는 팝업스토어를 관리해주는 플랫폼
                            </p>
                            <div className="flex flex-col items-center justify-center md-8">
                                <OutlineCircleDisabledButton text={buttonText}  to="/login" />
                            </div>
                            <p className="text-center text-gray-text-color-600">
                            </p>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <InputText placeholder="아이디"/>
                                <InputText placeholder="비밀번호"/>
                                <Button text="로그인"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login