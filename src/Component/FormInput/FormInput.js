import classNames from "classnames"
import styles from './FormInput.module.css'
const cx = classNames.bind(styles)
export default function FormInput(props) {
    return (
        <>
            <div className={`${cx("formInput-container")}`}>
                <div >
                    <label className={`${cx("loginInput-label")}`}>
                        {props.label}
                    </label>
                </div>
                <div className={`${cx("loginInput-content")}`}>
                    <input
                        className={`${cx("input-field")}`}
                        placeholder={`${cx(`Enter your ${props.placeholder}`)}`}
                        type = {props.showPwd ? (props.typePwd ? "text" : "password"): props.type}
                    />
                </div>
            </div>

        </>
    )
}