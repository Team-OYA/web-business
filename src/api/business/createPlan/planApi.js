import userInstance from "../../userBaseApi";

/**
 * @since 2024.02.27
 * @author 김유빈
 */
const PlanApi = {

    /**
     * 사업계획서 제안
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    save: async (data, file) => {
        const formData = new FormData()
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json;charset=UTF-8" }))

        if (file !== null) {
            formData.append("file", file);
        }

        return await userInstance.post(`/plans`, formData, {
            "Content-Type": `multipart/form-data`,
        })
    },
}

export default PlanApi;
