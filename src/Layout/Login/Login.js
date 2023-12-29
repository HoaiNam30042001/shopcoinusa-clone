import FormLogin from '../../Component/Form/FormLogin/FormLogin';
import { LoginServer } from '../../services/authen';
import styles from './Login.module.css'
import className from "classnames/bind";
import { useEffect, useState } from 'react';
const cx = className.bind(styles);

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isProcess,setIsProcess] = useState(true)
  const [isValue,setIsValue] = useState(false)
 
  const checkInput = ()=>{
    if (email.length === 0 || password.length ===0) {
      setIsValue(true)
    } else {
      setIsValue(false)
    }
  }
  const handleLogin = ({email,password})=>{
    console.log("handle login")
    setIsProcess(!isProcess)
    setTimeout(()=>{
      setIsProcess(!isProcess)
    },5000)
    console.log("is processing " + isProcess)
    LoginServer({email,password,setIsProcess})
    console.log(isProcess)
  }
  const onEnter = () =>{
    handleLogin({email,password})
  }
  return (
    <>
        <FormLogin
            titleForm="Log in your account"
            titleFormHelp="Don't have an account ? "
            onEnter = {onEnter}
            setEmail = {setEmail}
            setPassword = {setPassword}
            setIsProcess = {setIsProcess}
            isProcess ={isProcess}
            isValue = {isValue}
            checkInput = {checkInput}
        />
    </>
   );
}
