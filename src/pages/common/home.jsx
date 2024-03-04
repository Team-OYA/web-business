import OutlineCircleDisabledButton from "../../components/common/Button/OutlineCircleDisabledButton";
import React from "react";

/**
 * Home 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const Home = () => {
    return (
        <div className="login bg-white">
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-main-color-600 md:text-2xl">
                                THE POP
                            </h1>
                            <p className="text-center text-main-color-600">
                                현대백화점 팝업스토어 관리 플랫폼
                            </p>
                            <div className="flex flex-col items-center justify-center md-8">
                                <OutlineCircleDisabledButton text = "관리자 페이지" herf="/login/admin" info="관리자 페이지에서 유저 관리를 진행해 보세요."/>
                                <OutlineCircleDisabledButton text = "사업체 페이지" herf="/login/business" info="사업체 페이지에서 사업계획서 및 팝업 관리를 진행해 보세요."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
