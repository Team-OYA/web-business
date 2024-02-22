import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import InputText from "../../common/InputText/InputText";
import SubmitButton from "../../common/Button/SubmitButton";

function LoginPage() {
    const title = "Hello! let's get started"
    const description = "Sign in to continue."

    return (
        <div>
            <div className="d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div className="brand-logo">
                                <img src={require("../../../assets/images/logo.svg")} alt="logo" />
                            </div>
                            <h4>{title}</h4>
                            <h6 className="font-weight-light">{description}</h6>
                            <Form className="pt-3">
                                <InputText placeholder="Username" />
                                <InputText placeholder="Password" />
                                <SubmitButton text="SIGN IN" to="/dashboard"/>
                                <KeepMe />
                                <Register />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function KeepMe() {
    return (
        <div className="my-2 d-flex justify-content-between align-items-center">
            <div className="form-check">
                <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input"/>
                    <i className="input-helper"></i>
                    Keep me signed in
                </label>
            </div>
            <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
        </div>
    )
}

function Register() {
    return (
        <div className="text-center mt-4 font-weight-light">
            Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
        </div>
    )
}

export default LoginPage;
