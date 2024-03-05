import OutlineCircleDisabledButton from "../../components/common/Button/OutlineCircleDisabledButton";
import React from "react";
import BgImage from "../../assets/images/img_bg.jpg";

/**
 * Home 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const Home = () => {
    return (
        <div className="login bg-cover bg-center relative" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                pointerEvents: 'none', // 이 부분을 추가
            }}></div>
            <section style={{ position: 'relative', zIndex: 2 }}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0" style={{ position: 'relative' }}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 z-40 mb-6">
                            <h1 className="text-center font-semibold leading-tight tracking-tight text-white text-7xl">
                                THE POP
                            </h1>
                            <div className="flex flex-row items-center justify-center pt-10 z-50">
                                <OutlineCircleDisabledButton text="사업체 페이지" href="/login/business" info="사업체 페이지에서 사업계획서 및 팝업 관리를 진행해 보세요."/>
                                <OutlineCircleDisabledButton text="관리자 페이지" href="/login/admin" info="관리자 페이지에서 유저 관리를 진행해 보세요."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;