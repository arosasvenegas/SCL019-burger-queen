import { useState} from "react";
import { useAuth } from "../../context/authContext";


export function Register() {
    const [user,setUser] = useState({
        email: "",
        password: "",
    });
    const {singup}= useAuth()

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }
    const handelSubmit = e => {
        e.preventDefault()
        singup(user.email, user.password)
    }
    return (
        <form onSubmit={handelSubmit}>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange}/>
            <label>Contraseña</label>
            <input  type="password" name="password" id="password" onChange={handleChange}/>

            <button>Registrarse</button>
        </form>
    )
}