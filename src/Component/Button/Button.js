import classNames from "classnames/bind";
import styles from './Button.module.css'
import Loading from "../Loading/Loading";

const cx = classNames.bind(styles)
export default function Button(props) {
    return(
        <>
        {props.isProcess ? (
            <button className={props.className} onClick={props.onEnter}>
                <Loading/>
            </button> 
        ): (
            <button className={props.className} onClick={props.onEnter}>
                {props.icon}
                <a className={props.classNameTitle}>
                    {props.buttonName}
                </a>
            </button>
        )}
        </>
    );
}