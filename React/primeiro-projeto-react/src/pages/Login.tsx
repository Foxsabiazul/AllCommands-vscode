import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInput from "../assets/components/MyInput";
import MyButton from "../assets/components/MyButton"

function Login() {
    const [user,setUser] = useState(""); 
    const [password, setPassword] = useState("")
    const [loginFail, setLoginFail] = useState(false);

    const navigate = useNavigate();

    const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }


    const handlePassswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleOnCLick = () => {
        if(user === "mrcs" && password === "2505"){
            navigate("/to-do-list");

        }else{
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("user or pass it's not correct!")
            setLoginFail(false);
        }
    }


return(
    <div>
        <div className="login">
                

    
        <MyInput type="text" placeholder="user name" bgcolor="#f0f0f0" onChange={handleUserOnChange} value={loginFail? "" : user}/>
        <MyInput type="password" placeholder="user password" bgcolor="#f0f0f0" onChange={handlePassswordOnChange} value={loginFail? "" : password}/>
    </div>
        <MyButton onClick={handleOnCLick}>UNless</MyButton> 
        </div>  
    )
}

export default Login