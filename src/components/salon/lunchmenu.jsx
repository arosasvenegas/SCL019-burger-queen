import { useState, useEffect, useContext} from "react";
import menu from "../../Menu/menu.json";
import { UserContext } from "../../context/userContext";
import "../salon/lunchMenu.css"
 
export const LunchMenu = () =>{
    
    const data = menu.products;
    const[food, setFood] = useState([data]);
    const {AddProduct} = useContext(UserContext);

    useEffect(() => {
        setFood(data)
    },[]);

    return(
        <>
        <main className="containerMenu">
            <p className="tittleLunch">🍔 Hamburguesas Simples</p>
            <div className="optionMenu">
                {food
                .filter((menu) => menu.time === "tarde")
                .filter((element) => element.category === "Hamburguesa Simple")
                .map((item, id) => (


                    <section className="cardMenu" key={id}>
                        <button className="btnCard" onClick={() => {AddProduct(item)}} >
                        
                        <div className="infoCard">
                            <img className="imgProduct" src={item.image} alt={item.name}/>
                            <div>{item.name}</div>
                            <div className="price">${item.price}</div>
                        </div>
                        </button>
                    </section>
                ))
                }
            </div>
            <p className="tittleLunch">🍔 Hamburguesas Dobles</p>
            <div className="optionMenu">
                {food
                .filter((menu) => menu.time ==="tarde")
                .filter((element) => element.category === "Hamburguesa Doble")
                .map((item, id) => (

                    <section className="cardMenu" key={id}>
                        <button className="btnCard" onClick={() => {AddProduct(item)}}>
                    
                        <div className="infoCard">
                            <img className="imgProduct" src={item.image} alt={item.name} />
                            <div>{item.name}</div>
                            <div className="price">${item.price}</div>
                        </div>
                        </button>
                    </section>
                ))}
            </div>
            <p className="tittleLunch">🧀 Extras</p>
            <div className="optionMenu">
                {food
                .filter((menu) => menu.time ==="tarde")
                .filter((element) => element.category === "extras")
                .map((item, id) => (

                    <section className="cardMenu" key={id}>
                        <button className="btnCard" onClick={() => {AddProduct(item)}}>
                        
                        <div className="infoCard">
                            <img className="imgProduct" src={item.image} alt={item.name}/>
                            <div>{item.name}</div>
                            <div className="price">${item.price}</div>
                        </div>
                        </button>
                    </section>
                ))}
            </div>
            <p className="tittleLunch">🍟 Acompañamientos</p>
            <div className="optionMenu">
                {food
                .filter((menu) => menu.time === "tarde")
                .filter((element) => element.category === "acompañamientos")
                .map((item, id) => (

                    <section className="cardMenu" key={id}>
                        <button className="btnCard" onClick={() => {AddProduct(item)}}>
                        <div className="infoCard">
                            <img  className="imgProduct" src={item.image} alt={item.name}/>
                            <div>{item.name}</div>
                            <div className="price">${item.price}</div>
                        </div>
                        </button>
                    </section>
                ))}
            </div>
            <p className="tittleLunch">🥤 Para beber</p>
            <div className="optionMenu">
                {food
                .filter((menu) => menu.time === "tarde")
                .filter((element) => element.category === "bebidas")
                .map((item,id) => (

                    <section className="cardMenu" key={id}>
                        <button className="btnCard" onClick={() => {AddProduct(item)}}>
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
};