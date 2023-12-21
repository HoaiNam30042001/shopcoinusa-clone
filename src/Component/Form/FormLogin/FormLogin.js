import className from "classnames/bind";
import styles from './FormLogin.module.css'
import FormInput from "../../FormInput/FormInput";
import { Link } from "react-router-dom";
import React from "react";
import routers from "../../../routers/routers";
import Button from "../../Button/Button";
const cx = className.bind(styles);

export default function FormLogin(props) {
    return (
        <>
            <div className={`${cx("form-container-main")}`}>
                <div className={`${cx("form-login")}`}>
                    <div className={`${cx("form-logo")}`}>
                        <img
                            className={`${cx("formLogin-image")}`}
                            src='https://shopcoinusa.com/images/header-logo.png'
                            alt='Logo'
                        />
                    </div>
                    <p className={`${cx("formLogin-title")}`}>
                        {props.titleForm}
                    </p>
                    <div className={`${cx('formLogin-input')}`}>
                        <FormInput
                            label="Email"
                            type="text"
                            placeholder="Email"
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className={`${cx("formLogin-forgotPass")}`}>
                        <Link 
                            to={routers.forgotPwd}
                            className={`${cx("formLogin-forgotPass-link")}`}
                        >
                            <a className={`${cx("formLogin-forgotPass-title")}`}>Forgot your passoword ?</a>
                        </Link>
                    </div>
                    <div className={`${cx("formLogin-btn")}`}>
                       <Button
                        className={`${cx("btn")}`}
                        buttonName="Log in"
                       
                       />
                    </div>
                    <div className={`${cx("formLogin-help")}`}>
                        <span>
                            Don't have an account?
                            <Link 
                                className={`${cx("login-forgotpwd-link")}`}
                                to={routers.register}
                            >
                                <a className={`${cx("formLogin-help-title")}`}>Register</a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>        
        </>
    );
}