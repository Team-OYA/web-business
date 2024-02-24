import {Col, Form} from 'react-bootstrap';

function FileUpload(props) {
    return (
        <Form.Group className="row">
            <Form.Label column sm={2}>{props.title}</Form.Label>
            <Col sm={10}>
                <div className="custom-file">
                    <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                    <label className="custom-file-label" htmlFor="customFileLang">{props.placeholder}</label>
                </div>
            </Col>
        </Form.Group>
    )
}

export default FileUpload;
