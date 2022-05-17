import {Link} from "react-router-dom";
import logo from "../../images/BurgerQueen.png";
import '../staff/staff.css';

export const Staff = () => {
    return(
        <section className="bodyWelcome">
            <main>
                <section className="logoBtns">
                    <img className="logoWelcome" src={logo} alt="" />
                    
                    <Link to="/Meseras"><button className="btnWelcome">Meseras</button></Link>
                    <Link to="/Chefs"><button className="btnWelcome">Chef</button></Link>
                    
                    
                </section>
                
            </main>
        </section>
    )

}