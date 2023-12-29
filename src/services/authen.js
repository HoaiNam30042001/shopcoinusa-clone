export const LoginServer = ({email,password,setIsProcess})=>{
    try {
        console.log("axios")
        console.log("Email " +email+" Password "+ password)
    } catch(err) {
        setIsProcess(true)
    }
}