import FormRegister from '../../Component/Form/FormRegister/FormRegister';
import styles from './Register.module.css'
import className from "classnames/bind";
const cx = className.bind(styles);

export default function Register() {
  return (
    <>
        <div className={`${cx('formContainer')}`}>
            <div className={`${cx('formContainer-main')}`}>
                <FormRegister 
                     titleForm="Register account"
                     titleFormHelp="Have an account? "
                />
            </div>
        </div>
    </>
   );
}