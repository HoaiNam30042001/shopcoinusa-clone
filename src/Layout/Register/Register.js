import FormRegister from '../../Component/Form/FormRegister/FormRegister';
import styles from './Register.module.css'
import className from "classnames/bind";
import { useEffect, useState } from 'react';
import { LoginServer } from '../../services/authen';

const cx = className.bind(styles);

export default function Register() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [userName,setUserName] = useState("")
  const [isProcess,setIsProcess] = useState(true)
  const [isValue,setIsValue] = useState(false)
  const checkInput = ()=>{
    if (email.length === 0 || password.length ===0|| userName.length ===0) {
      setIsValue(true)
    } else {
      setIsValue(false)
    }
  }
  const handleLogin = ({email,password})=>{
    console.log("handle register")
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

                <FormRegister 
                      titleForm="Register account"
                      titleFormHelp="Have an account? "
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