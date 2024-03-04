export default InfoList;

/**
 * InfoList 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */
function InfoList(props) {
    return (
        <div className="info-list flex w-68 text-gray-text-color-700 text-sm">
            <div className="image p-4 h-fit bg-gray-text-color-150 rounded-lg ">
                <img src={props.image} alt="popup-status" />
            </div>
            <div className="ml-5">

                {props.data.map((data) => (
                    <div key={data.id} className="flex justify-between mb-6">
                        <div className="mr-2 text-sm">{data.title}</div>
                        <div className="flex">
                            <div className="font-bold text-sm">{data.content}</div>
                            <div className="text-sm ml-2">건</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
