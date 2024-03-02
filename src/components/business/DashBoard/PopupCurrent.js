import StatusImage from '../../../assets/images/img_dash_status.png';
import PopupStoreImage from '../../../assets/images/img_dash_popup.png';
import PopupCommunityImage from '../../../assets/images/img_dash_community.png';
import InfoList from '../../common/InfoList/InfoList';

/**
 * PopupCurrent 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */

function PopupCurrent() {
  return (
    <div className="popup-current flex justify-between px-3 py-4">
        <InfoList image={StatusImage} data={PopupStatusData}/>
        <InfoList image={PopupStoreImage} data={PopupStoreData}/>
        <InfoList image={PopupCommunityImage} data={PopupCommunityData}/>
    </div>
  );
}

export default PopupCurrent;


const PopupStatusData = [
    {
        id: 1,
        title: "제출한 사업계획서",
        content: 13,
    },
    {
        id: 2,
        title: "입점 대기",
        content: 13,
    },
    {
        id: 3,
        title: "입점 요청",
        content: 3,
    },
    {
        id: 4,
        title: "입점 완료",
        content: 9,
    },
    {
        id: 5,
        title: "입점 거절",
        content: 0,
    },
    {
        id: 6,
        title: "입점 철회",
        content: 1,
    },
]

const PopupStoreData = [
    {
        id: 1,
        title: "팝업스토어 게시글",
        content: 13,
    },
    {
        id: 2,
        title: "광고 게시중",
        content: 3,
    },
]

const PopupCommunityData = [
    {
        id: 1,
        title: "커뮤니티 게시글",
        content: 13,
    },
    {
        id: 2,
        title: "광고 게시중",
        content: 3,
    },
]