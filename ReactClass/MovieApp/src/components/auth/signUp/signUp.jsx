import React, {useState} from "react";
import style from "./signUp.module.css"
import {useSignUpMutation} from "../../../service/userAuthApi.jsx"
import {Link,useNavigate} from "react-router";

const SignUp =()=> {

    const navigate = useNavigate();

    const userDetails ={
        userName:"",
        password:"",
        email:""
    };
    const [userData, setUserData] = useState(userDetails);
    const res = useSignUpMutation();
    console.log(res)
    const handleInput =(e)=>{
        const {name, value} =e.target;
        setUserData((prev)=>({...prev,[name]:value.trim()}))
    };
    console.log(userData)

    const submitHandle = async(e)=>{
        e.preventDefault();
        try {
            const response = await SignUp(userData).unwrap();
            if (response.id) {
                navigate("/login");
            }
            console.log(response)
        }catch (e) {
            console.log(e)
        }
    }
    return (

        <>
            <div >
                <form className={style.formStyle}>
                    <label htmlFor="name">Username:</label>
                    <input name="userName"  placeholder="username"
                           className={style.input} onChange={handleInput} required/>

                    <label htmlFor="password">Password:</label>
                    <input type={"password"} name="pssword" id="pasword"
                           placeholder="password" className={style.input} onChange={handleInput} required/>

                    <label htmlFor="email">Email:</label>
                    <input type={"email"} name="email" placeholder="email"
                           className={style.input} onChange={handleInput} required/>

                    <button className={style.submitButton} onClick={submitHandle}>Submit</button>

                    {/*<CustomButton text="signUp" onClick={() => window.location.href = 'Login'} />*/}
                    <p>Have an account?</p>
                    <Link className={style.loginLink} to="/Login">Login</Link>
                </form>
            </div>
        </>
    )
}

export default SignUp