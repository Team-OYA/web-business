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
                            {/*todo: 가운데로 배치*/}
                            <OutlineCircleDisabledButton text="사업체 페이지"/>
                            <OutlineCircleDisabledButton text="관리자 페이지"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
