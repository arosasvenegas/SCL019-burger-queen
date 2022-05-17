import {useAuth} from "../../context/authContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {MorningMenu} from "./Morning";
import {LunchMenu} from "./lunchmenu";
import "../salon/buttons.css";
import Logo from "../../images/BurgerQueen.png";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";



export function Navbar ()  { 
    const {logout} = useAuth();
    const Navigate = useNavigate();
    

    const handleLogout = async() => {
        await logout()
        Navigate ("/")
    };
    
    const [show, setShow] = useState(true);
    const showMenu = (menu) =>{
        setShow(menu);
    };
   

     return(
        <>
        <div className="divBotones">
            <Link to="/Staff"> <img className="imgNavbar" src={Logo} alt=""/> </Link>
            <button className="btnMenu" onClick={() => showMenu(true)}>Desayuno</button>
            <button className="btnMenu" onClick={() => showMenu(false)}>Almuerzo</button>
            <button className="btnMenu" ><NavLink to="/Ready"> Comandas </NavLink></button>
            <button className="btnOut" onClick={handleLogout}> < FaPowerOff className="iconOut"/> </button>
                
        </div>
        <div className="despliegueMenu">
        {show ? <MorningMenu /> : <LunchMenu /> }
        
        
        </div>
                    
                    
        </>
    )


    



}
