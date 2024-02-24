import './Button.css';

function Button(props) {
    return (
        <button type="submit" className="btn btn-gradient-primary mr-2">{props.text}</button>
    )
}

export default Button;
