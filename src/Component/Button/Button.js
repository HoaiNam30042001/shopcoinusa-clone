import classNames from "classnames/bind";
import styles from './Button.module.css'
const cx = classNames.bind('styles')
export default function Button(props) {
    return(
        <>
        <button
        ><a>{props.buttonName}</a></button>
        </>
    );
}