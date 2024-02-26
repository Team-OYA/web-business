function Checkbox(props) {
    return (
        <div className="form-check">
            <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input accent-main-color-600"/>
                <i className="input-helper"></i>
                <span className="text-sm ml-2">{props.text}</span>
            </label>
        </div>
    )
}

export default Checkbox;
