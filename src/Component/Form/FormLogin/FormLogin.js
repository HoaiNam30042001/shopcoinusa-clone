import className from "classnames/bind";
import styles from './FormLogin.module.css'
import FormInput from "../../FormInput/FormInput";
import { Link } from "react-router-dom";
import React from "react";
import routers from "../../../routers/routers";
import Button from "../../Button/Button";
import Image from "../../Image/Image";
import { useState } from 'react';
const cx = className.bind(styles);

export default function FormLogin(props) {
    return (
        <>
            <div className={`${cx("form-container")}`}>
                <div className={`${cx("form-container-main")}`}>
                    <div className={`${cx("form-login")}`}>
                        <Image
                            src='/images/header-logo.png'
                            alt='login-logo'
                            className={`${cx('form-logo')}`}
                        />
                        <p className={`${cx("form-title")}`}>{props.titleForm}</p>
                        <FormInput 
                            className={`${cx('form-input')}`}
                            placeholder="Enter your email"
                            type="text"
                            label="Email"
                            setInput = {props.setEmail}
                            checkInput = {props.checkInput}
                        />
                        <FormInput 
                            className={`${cx('form-input')}`}
                            placeholder="Enter your password"
                            type="password"
                            label="Password"
                            setInput = {props.setPassword}
                            checkInput = {props.checkInput}
                        />
                        <div className={`${cx("form-link")}`}>
                            <Link
                                to={routers.forgotPwd}
                                className={`${cx("formLogin-forgotPass-link")}`}
                            >
                                <a className={`${cx("formLogin-forgotPass-title")}`}>Forgot your passoword ?</a>
                            </Link>
                        </div>
                        <Button 
                            buttonName="Log in"        
                            onEnter = {props.onEnter}         
                            isValue={props.isValue}       
                            isProcess ={props.isProcess}
                            setIsProcess = {props.setIsProcess}
                        />
                            <span className={`${cx('form-help')}`}>
                                {props.titleFormHelp} 
                                <Link
                                    to={routers.register}
                                    className={`${cx("form-link-register")}`}
                                >
                                    <a className={`${cx("form-help-title")}`}>Register</a>
                                </Link>
                            </span>
                    </div>
                </div>
            </div>
        </>
    );
}