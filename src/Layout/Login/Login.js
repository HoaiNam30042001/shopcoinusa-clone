import FormLogin from '../../Component/Form/FormLogin/FormLogin';
import styles from './Login.module.css'
import className from "classnames/bind";
const cx = className.bind(styles);

export default function Login() {
  return (
    <>
        <FormLogin
            titleForm="Log in your account"
            titleFormHelp="Don't have an account ? "
        />
    </>
   );
}
