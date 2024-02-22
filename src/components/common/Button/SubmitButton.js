import {Link} from "react-router-dom";

function SubmitButton(props) {
    return (
        <div className="mt-3">
            <Link className="btn btn-gradient-primary mr-2" to={props.to}>{props.text}</Link>
        </div>
    )
}

export default SubmitButton;
