import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import Table from "../../components/common/Table/Table";
import ContentBox from "../../components/common/ContentBox/ContentBox";

/**
 * PlanDetail 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const PlanDetail = () => {

    // useParams 훅을 사용하여 동적인 경로 파라미터를 받아옴
    const { planId } = useParams();

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {

            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="planDetail">
            <ContentBox
                title="사업계획서 상세"
                content={
                    <>

                    </>
                }
            >
            </ContentBox>
        </div>
    );
};

export default PlanDetail;
