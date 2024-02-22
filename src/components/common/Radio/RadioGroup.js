import {Form} from "react-bootstrap";

function RadioGroup(props) {
    return (
        <div className="col-md-6">
            <Form.Group className="row">
                <label className="col-sm-3 col-form-label">{props.title}</label>
                {
                    props.radios.map((radio, index) => (
                        <Radio key={index} content={radio.content} checked={radio.checked}/>
                    ))
                }
            </Form.Group>
        </div>
    )
}

function Radio(props) {
    return (
        <div className="col-sm-4">
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ExampleRadio4"
                           id="membershipRadios1" checked={props.checked}/>{props.content}
                    <i className="input-helper"></i>
                </label>
            </div>
        </div>
    )
}

export default RadioGroup;
