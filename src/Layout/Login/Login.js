import FormLogin from '../../Component/Form/FormLogin/FormLogin';
import styles from './Login.module.css'
import className from "classnames/bind";
const cx = className.bind(styles);

export default function Login() {
  return (
    <>
        <div className={`${cx('formContainer')}`}>
            <div className={`${cx('formContainer-main')}`}>
                <FormLogin
                    titleForm="Login your account"
                />
            </div>
        </div>
    </>
   );
}
