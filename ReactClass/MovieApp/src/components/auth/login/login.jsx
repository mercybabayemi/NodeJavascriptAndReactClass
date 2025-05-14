import React, {useState} from 'react'
import CustomButton from "../../../reusable/CustomButton.jsx";
import style from "./login.module.css"
import {Link} from "react-router";
const Login = () => {

    const loginDetails = {
        Email: "",
        Password: "",
    };

    const [loginData, setLoginData] = useState(loginDetails);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prev) => ({...prev, [name]: value.trim()}))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const login = await Login(loginDetails);
            console.log(login);
        } catch (e) {
            console.error(e);
        }
    }

    console.log(loginData);

    return (
        <>
            <form className={style.formStyle}>
                <label htmlFor="email">Email:</label>
                <input type={"email"} name="email" placeholder="email"
                       className={style.input} onChange={handleChange} required/>

                <label htmlFor="password">Password:</label>
                <input type={"password"} name="pssword" id="pasword"
                       placeholder="password" className={style.input} onChange={handleChange} required/>

                <button className={style.submitButton} onClick={submitHandler}>Submit</button>

                {/*<CustomButton text="signUp" onClick={() => window.location.href = 'Login'} />*/}
                <p>Not a member?</p>
                <Link className={style.signUpLink} to="/SignUp">Signup</Link>
            </form>
        </>
    )
}

export default Login;