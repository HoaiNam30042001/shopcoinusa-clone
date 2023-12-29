import className from "classnames/bind";
import styles from './FormRegister.module.css'
import FormInput from "../../FormInput/FormInput";
import { Link } from "react-router-dom";
import React from "react";
import routers from "../../../routers/routers";
import Button from "../../Button/Button";
import Image from "../../Image/Image";
const cx = className.bind(styles);

export default function FormRegister(props) {
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
                            placeholder="Enter your username"
                            type="text"
                            label="Username"
                            setInput = {props.setEmail}
                            checkInput = {props.checkInput}
                        />
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
                            setInput = {props.setEmail}
                            checkInput = {props.checkInput}
                        />
                        <Button 
                            buttonName="Register"      
                            className={`${cx("btn-input-login")}`}
                            classNameTitle = {`${cx("btn-title")}`}
                            onEnter = {props.onEnter}         
                            isValue={props.isValue}       
                            isProcess ={props.isProcess}
                            setIsProcess = {props.setIsProcess}      
                        />
                            <span className={`${cx('form-help')}`}>
                                {props.titleFormHelp} 
                                <Link
                                    to={routers.login}
                                    className={`${cx("form-link-register")}`}
                                >
                                    <a className={`${cx("form-help-title")}`}>Login</a>
                                </Link>
                            </span>
                    </div>
                </div>
            </div>            
        </>
    );
}