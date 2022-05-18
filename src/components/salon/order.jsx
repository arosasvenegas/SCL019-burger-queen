import {useContext} from "react";
import { UserContext } from "../../context/userContext";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"
import {BsFillTrashFill} from "react-icons/bs"

import "../salon/order.css"



export const Order = () => {

   const {order, add, less, remove, total, saveOrder, client, setClient} = useContext(UserContext);

   const handleChange = ({target: {name, value}}) =>{
    setClient({...client, [name]: value})
}
    const handelClick = e => {
        e.preventDefault()
        saveOrder(client.name, client.table)
    }


    return(
        <>
        <section className="containerOrder" >
            <div className="containerInputs">
            <input className="inputComanda" placeholder="Nombre Cliente" type="text" name="name"  onChange={handleChange} value={client.name} />
            <input className="inputComanda" placeholder="N° Mesa" type="number" name="table" onChange={handleChange} value={client.table} />
            </div>

            {order.length === 0 ? (
                <div className="alertOrder"><p>Tu orden esta vacia😁</p></div>
                
            ) : (
               order.map((item, id) => (
                    <section key={id} className="clientOrder">
                    <button className="btnClientOrder" onClick={() => add(item.id)}><AiFillPlusCircle className="iconOrder"/></button>
                    <p> {item.count}</p>
                    <button className="btnClientOrder" onClick={() => less(item.id)}><AiFillMinusCircle className="iconOrder"/></button>
                    <p className="nameItem">{item.name}</p>
                    <p>${item.price}</p>
                    <button className="btnClientOrder" onClick={() =>remove(item.id)}><BsFillTrashFill className="iconOrder"/></button>
                    </section>
                ))
            )}
            
            <div className="totalBill">
                <p>${total}</p>
            </div> 
            
            <button className="sendOrder" type="button" onClick={handelClick} >Cocinar</button>
           
        </section>
        </>
    )
}