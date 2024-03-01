import RankingList from '../../common/InfoList/RankingList';

/**
 * PopupRanking 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */

function PopupRanking() {
    return (
        <div className="popup-ranking h-fit flex-col px-2 py-4">
            <div className="info flex w-full justify-between bg-gray-100 rounded-lg px-4 py-3 mb-3">
                <div className='flex'>
                    <div className='rank w-12'>
                        MY
                    </div>
                    <div className='title'>
                        슬램덩크 팝업스토어
                    </div>
                </div>
                <div className='views flex content'>
                    3,720회
                </div>
            </div>
            {data.map(item => (
                <RankingList id={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    );
  }
  
  export default PopupRanking;

  const data = [
    {
        id: 1,
        title: '포스트 수',
        content: '11111100'
    },
    {
        id: 2,
        title: '댓글 수',
        content: '1111100'
    },
    {
        id: 3,
        title: '좋아요 수',
        content: '132400'
    },
    {
        id: 4,
        title: '조회 수',
        content: '100'
    },
    {
        id: 5,
        title: '잇으민짱',
        content: '100',
    }
]