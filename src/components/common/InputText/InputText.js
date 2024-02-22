import {Form} from "react-bootstrap";

function  InputText(props) {
    return (
        <Form.Group className="d-flex search-field">
            <Form.Control type="email" placeholder={props.placeholder} size="lg" className="h-auto" />
        </Form.Group>
    )
}

export default InputText;
