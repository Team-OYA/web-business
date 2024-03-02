import MyPostListTable from "../../common/Table/MyPostListTable";

function PopupPostList() {
    return (
        <div className="popup-current flex h-92 justify-between px-3 py-4">
            <MyPostListTable/>
        </div>
    );
  }
  
  export default PopupPostList;