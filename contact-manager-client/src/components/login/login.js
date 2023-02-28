import React, { useState } from "react";
import { isAuthenticated } from "../../helper/helper";
import { Link } from "react-router-dom";
import "./login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [eye, seteye] = useState("password");
    const [redirect, setredirect] = useState(false);
    const url = process.env.REACT_APP_API;

    const validateEmail = (email) => {
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
    const handleEye = () => {
        let inputElement = document.getElementById('password');
        if (inputElement.type === "password") {
            inputElement.type = "text";
        } else {
            inputElement.type = "password";
        }
    }
    const HandleClick = () => {
        if (email, password) {
            const isVallid = validateEmail(email);
            if (isVallid) {
                fetch(`${url}`, {
                    method: "POST",
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then((res) => res.json()
                ).then((data) => {
                    console.log(data);
                    if (data.error) {
                        alert(data.error)
                    } else {
                        localStorage.setItem("token", JSON.stringify(data.token))
                        localStorage.setItem("user", data.user)
                        setemail("")
                        setpassword("")
                        console.log(isAuthenticated())

                        setredirect(true);

                    }
                })
            } else {
                alert("Please Enter Valid Email");
            }

        } else {
            alert("Please Fill all Fields")
        }
    }

    const performRedirect = () => {
        if (redirect) {
            return <Navigate to="/contacts" />
        }
    }
    return (

        <div id="container">
            {performRedirect()}
            

            <div className="Rectangle1">
                

                <div className="logo">
                    <h1>Logo</h1>
                    <p>Enter your credentials to access your account</p>
                </div>
                <div className="inputs">
                    <div>
                        <input type="email" className="email" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className="inputpass">
                        <input type="password" id="password" className="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                        
                    </div>



                </div>
                <div className="buttons">
                    <button className="button1" onClick={HandleClick}>Sign In</button>
                    <Link to="/register" ><p className="signup" >Sign Up</p></Link>
                </div>
             

            </div>
           

        </div>

    )
}

export default Login;