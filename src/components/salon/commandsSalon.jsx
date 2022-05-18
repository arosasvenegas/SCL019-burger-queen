import Logo from "../../images/BurgerQueen.png";
import { useState } from "react";
import {ReadyToServe} from "../cocina/readyToServe";
import {Served} from "../cocina/ServedCommand";
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link } from "react-router-dom";

export const CommandsSalon = () => {

    const [show, setShow] = useState(true);
    const showCommands = (command) =>{
        setShow(command);
    };
    
    

    return (
       
        <>
        
        <section className="containerChef">
        <div className="navbarChef">
            <img className="imgNavbar" src={Logo} alt="" />
            <button className="btnChef" onClick={() => showCommands(true)}>Listos</button>
            <button className="btnChef" onClick={() => showCommands(false)}>Servidos</button>
            <Link to="/Meseras"> <FiArrowLeftCircle className="back"/> </Link>
        </div>
        
        {show ? <ReadyToServe/> : < Served/> }
         
        

        
        </section>
        
        </>
    )

}