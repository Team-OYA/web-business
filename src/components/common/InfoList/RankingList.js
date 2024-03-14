export default RankingList;

/**
 * RankingList 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */

function RankingList(props) {
    return (
        <div className="popup-ranking flex py-1">
            <div className="info flex w-full items-center justify-between bg-gray-50 rounded-lg py-3 px-4">
                <div className='flex'>
                    <div className='rank w-12 font-bold flex'>
                        {props.id}위
                    </div>
                    <div className='title flex'>
                        {props.title}
                    </div>
                </div>
                <div className='views flex pr-1'>
                    {formatNumberWithCommas((10 - props.id) * 500)} 회
                </div>
            </div>
        </div>
    )
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
