import classNames from "classnames/bind"
import styles from './FormInput.module.css'
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from'react'
const cx = classNames.bind(styles)
export default function FormInput(props) {
    const [showPassword,SetShowPassword] = useState(false)
    const onChangeInput = (e)=>{
        props.checkInput()
        props.setInput(e.target.value)
    }
    const handleToggle = ()=>{
        SetShowPassword(!showPassword)
    }
    return (
        <>
            <div className={`${cx("form-input-container")}`}>
                <div className={`${cx("form-input-label")}`}>
                    {props.label}
                </div>
                    <input 
                        placeholder={props.placeholder}
                        className={`${cx("input")}`}
                        type={props.type}
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={handleToggle}
                        onChange={onChangeInput}
                    />
                    {/* <FontAwesomeIcon
                       
                    /> */}
            </div>
        </>
    )
}