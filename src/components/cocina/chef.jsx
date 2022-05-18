import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { ToPrepare } from "./command";
import { ReadyCommand } from "./commandReady";
import { useAuth } from "../../context/authContext";
import Logo from "../../images/BurgerQueen.png";
import "./command.css"




export const Chef = () => {

    const [show, setShow] = useState(true);
    const showMenu = (command) =>{
        setShow(command);
    };
    const {logout} = useAuth();
    const Navigate = useNavigate();
    const handleLogout = async() => {
        await logout()
        Navigate ("/")
    };
    

    return (
       
        <>
        <section className="containerChef">
        <div className="navbarChef">
            <Link to="/Staff"> <img className="imgNavbar" src={Logo} alt=""/> </Link>
            <button className="btnChef" onClick={() => showMenu(true)}>Pendientes</button>
            <button className="btnChef" onClick={() => showMenu(false)}>Entregados</button>
            <button className="btnOut" onClick={handleLogout}> < FaPowerOff className="iconOut"/> </button>
            
        </div>
        {show ? <ToPrepare/> : <ReadyCommand/>}
          
         
        

        
        </section>
        
        </>
    )

}