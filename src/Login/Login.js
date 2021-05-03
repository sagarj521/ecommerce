import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Login = (props)=>{

    // let [name, setName] =  useState("");
    // let [password, setPassword]  = useState("");

    // const loginHandler = (e)=>{
    //     console.log("in");
    //     e.preventDefault();
    //     console.log(name, password);
    // }

    /* USE FORM library for form handling */
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const loginHandler = (data)=>{
                            console.log(data);
                            axios.post("http://c365b9f13b87.ngrok.io/api/v1/auth/login",data)
                                 .then(result=>{
                                    localStorage.setItem('authToken', result.data.data.token);
                                    props.history.push('/products');
                                 })
                                 .catch(error=>{
                                     console.log("error",error);
                                 })
                        }
    return (
        <div className="container">
            <div className="box">
            <form onSubmit={handleSubmit(loginHandler)}>
                    <h1>Sign In</h1>
                    <div className="row">
                        <input type="text" placeholder="Email" {...register("email",{ required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}/>
                        {errors.email && "Valid Email is required"}
                    </div>
                    <div className="row">
                        <input type="password" placeholder="Password" {...register("password", { required: true })}/> 
                        {errors.password && "Password is required"}
                    </div>
                    <div className="row">
                        <button id="login" type="submit">Login</button>
                    </div>
                    <div className="row">
                        <a href="#">Forget Password</a>                        
                    </div>    
                </form>  
                {/* <form onSubmit={($event)=>loginHandler($event)}>
                    <h1>Sign In</h1>
                    <div className="row">
                        <input type="text" placeholder="Username" name="username" value={name} onChange={($event)=>setName($event.target.value)} />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="Password" name="password" value={password} onChange={($event)=>setPassword($event.target.value)} /> 
                    </div>
                    <div className="row">
                        <button id="login" type="submit">Login</button>
                    </div>
                    <div className="row">
                        <a href="#">Forget Password</a>                        
                    </div>    
                </form>               */}
            </div>
        </div>
    )
}

export default Login;