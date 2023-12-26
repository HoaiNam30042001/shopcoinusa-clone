import FormRegister from '../../Component/Form/FormRegister/FormRegister';
import styles from './Register.module.css'
import className from "classnames/bind";
import { useEffect, useState } from 'react';
import { LoginServer } from '../../services/authen';

const cx = className.bind(styles);

export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isProcess,setIsProcess] = useState(false)
    const [isValue,setIsValue] = useState(true)
   
    const checkInput = ()=>{
      if (email.length === 0 || password.length ===0) {
        setIsValue(true)
      } else {
        setIsValue(false)
      }
    }
    const handleLogin = ({email,password})=>{
      console.log("handle login")
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