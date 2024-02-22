
function Checkbox(props) {
    return (
        <div className="form-check">
            <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input"/>
                <i className="input-helper"></i>
                {props.text}
            </label>
        </div>
    )
}

export default Checkbox;
