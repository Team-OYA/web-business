import { Form } from 'react-bootstrap';

function  InputText(props) {
    return (
        <Form.Group className="row">
            <label className="col-sm-3 col-form-label">{props.content}</label>
            <div className="col-sm-9">
                <Form.Control type="text" className="form-control" placeholder={props.placeholder} />
            </div>
        </Form.Group>
    )
}

export default InputText;
