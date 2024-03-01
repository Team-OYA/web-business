import MyPostListTable from "../../common/Table/MyPostListTable";

function PopupPostList() {
    return (
        <div className="popup-current flex justify-between px-3 py-4">
            <MyPostListTable/>
        </div>
    );
  }
  
  export default PopupPostList;