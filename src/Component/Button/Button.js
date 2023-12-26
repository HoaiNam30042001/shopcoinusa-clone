import classNames from "classnames/bind";
import styles from './Button.module.css'
import Loading from "../Loading/Loading";

const cx = classNames.bind(styles)
export default function Button(props) {
    return(
        <>
        {props.isProcess ? (
            <button className={`${cx("btn")}`} onClick={props.onEnter}>
            <a className={`${cx("title")}`}>
                {props.buttonName}
            </a>
        </button> 
        ): (
            <button className={`${cx("btn")}`} onClick={props.onEnter}>
                <Loading/>
        </button> 
        )}
        </>
    );
}