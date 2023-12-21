import className from "classnames/bind";
import styles from './FormRegister.module.css'
import FormInput from "../../FormInput/FormInput";
import { Link } from "react-router-dom";
import React from "react";
import routers from "../../../routers/routers";
import Button from "../../Button/Button";
const cx = className.bind(styles);

export default function FormRegister(props) {
    return (
        <>
            <div className={`${cx("form-container-main")}`}>
                <div className={`${cx("form-login")}`}>
                    <div className={`${cx("form-logo")}`}>
                        <img
                            className={`${cx("formRegister-image")}`}
                            src='https://shopcoinusa.com/images/header-logo.png'
                            alt='Logo'
                        />
                    </div>
                    <p className={`${cx("formRegister-title")}`}>
                        {props.titleForm}
                    </p>
                    <div className={`${cx('formRegister-input')}`}>
                        <FormInput
                            label="Username"
                            type="text"
                            placeholder="Username"
                        />
                        <FormInput
                            label="Email"
                            type="text"
                            placeholder="Email"
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <div className={`${cx("formRegister-btn")}`}>
                       <Button
                        className={`${cx("btn")}`}
                        buttonName="Register"
                       
                       />
                    </div>
                    <div className={`${cx("formRegister-help")}`}>
                        <span>
                            Don't have an account?
                            <Link 
                                className={`${cx("login-forgotpwd-link")}`}
                                to={routers.login}
                            >
                                <a className={`${cx("formRegister-help-title")}`}>Login</a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>        
        </>
    );
}