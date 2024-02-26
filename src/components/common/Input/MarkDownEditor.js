import React from "react";
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';

/**
 * MarkDownEditor 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function MarkDownEditor(props) {
    return (
        <div className="container">
            <div className="mb-6">
                <label htmlFor="markdown"
                       className="block mb-2 text-sm font-medium text-gray-900">
                    {props.title}
                </label>
                <Editor
                    id="markdown"
                    placeholder="내용을 입력해주세요."
                    initialEditType="markdown"
                    previewStyle={window.innerWidth > 1200 ? 'vertical' : 'tab'}
                    hideModeSwitch
                    usageStatistics={false}
                    useCommandShortcut
                    height="auto"
                />
            </div>
        </div>
    );
}

export default MarkDownEditor;
