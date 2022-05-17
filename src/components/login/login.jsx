import React from "react"
import Logo from "../../images/BurgerQueen.png"
import "../login/login.css"
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import {useNavigate} from "react-router-dom"



export function Login ()  {

    const [user, setUser] = useState({
        email: "",
        password:"",

    });
    const {login, loading}= useAuth();
    const navigate = useNavigate();
    const [error,setError] = useState();

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate("/Staff");
        } catch (error){
            console.log(error)
            if(error.code === "auth/internal-error"){
                setError("Correo invalido");
            }
            if(error.code === "auth/wrong-password"){
                setError("Contraseña incorrecta")
            }
            if(error.code === "auth/invalid-email"){
                setError("Ingrese email")
            }
            
        }
        
    };
    if (loading) return <h1>Loading..</h1>
    
    return (
        <section className="loginContainer">
        <main className="loginBody">
            <section >
                <img className="logoLogin" src={Logo} alt=""/>
            </section>
            <form className="loginForm" onSubmit={handelSubmit}>
                <label className="loginLabel" >Correo Electronico</label>
                <input className="loginInput" type="email" name="email" id="email" onChange={handleChange}/>

                <label className="loginLabel"> Contraseña</label>
                <input className="loginInput" type="password" name="password" id="password" onChange={handleChange}/>
                <button className="btnLogin">Iniciar Sesion</button>
                {error && <p className="errorLogin">{error}</p>}
            </form>
        </main>
        </section>
    );

};



