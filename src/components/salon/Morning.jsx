import{ useState, useEffect, useContext} from "react";
import menu from "../../Menu/menu.json";
import "../salon/Morning.css";
import { UserContext } from "../../context/userContext";




export const MorningMenu = () =>{

        const data = menu.products;
        const[food, setFood] = useState([data]);
        const {AddProduct} = useContext(UserContext);
       
        useEffect(() => {
            setFood(data)
        },[]);

    return(
        <>
        <main className="containerMenu">
        <p className="tittleMorning">🥪 Para Comer</p>
        <div>
            {food
            .filter((menu) => menu.time ==="mañana")
            .filter((element) => element.category ==="desayuno")            
            .map((item,id) => (
                        <section className="cardMenu" key={id}>
                             <button className="btnCard" onClick={() => {AddProduct(item)} } >
                                <div className="infoCard">
                                    <img className="imgProduct" src={item.image} alt={item.name}/>
                                    <div >{item.name}</div>
                                    <div className="price">${item.price}</div>
                                </div>
                               
                            </button>  
                        </section>  
                        
            ))}
        </div>

            <p className="tittleMorning">☕ Para Beber</p>
            <div>
                {food
                .filter((menu) => menu.time ==="mañana")
                .filter((element) => element.category === "bebidas")
                .map((item, id) => (

                    <section className="cardMenu" key={id}>
                        <button className="btnCard" onClick={() => {AddProduct(item)} }>
                        
                        <div className="infoCard">
                            <img className="imgProduct" src={item.image} alt={item.name}/>
                            <div>{item.name}</div>
                            <div className="price">${item.price}</div>
                        </div>
                        
                        </button>
                    </section>


                ))}




            </div>

            
        </main>

        

        </>
        
    )
    
}