import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot} from "firebase/firestore";
import "./command.css"




export const Served = ({count, name}) =>{

    const [command, setCommand] = useState([]);
   
useEffect(() => {
    onSnapshot(
        collection(db, "commands"),
        (snapshot) => {
            const arrayOrders = snapshot.docs.map((order) => {
                return {...order.data(), id:order.id};
            })
            setCommand(arrayOrders);
        }
    ) 
},[]);

const orderFinish = command.filter((order) => {
    return order.Status === "Servido";
})

let sortPendingOrders = orderFinish.sort((a,b) => {
    if (a.Time > b.Time){
        return 1;
    }
    if (a.Time < b.Time){
        return -1;
    }
    return 0;
});

    return(
        <>
        <section className="containerPendientes">
            
            <h2>Pedidos Entregados</h2>
           
               {sortPendingOrders.map((elem, id) =>(
                   
             <div className="toDoCommand" key={id}>
                 <div className="datosCommand">
                 <h2 className="dato">Mesa {elem.Table}</h2>
                 <h3 className="dato">{elem.Name}</h3>
                 <p className="dato">{elem.Time}</p>
                 
                 </div>
                

                 {[elem.Order].map((item, index) => (
                     
                <div className="itemsCommand" key={index}>
                    {item.map((e,i) => (
                        <div key={i}>
                            <p>{e.count} - {e.name}</p>
                        </div>
                        
                    ))}
                </div>
                
                
                
            ))}
            <div>
                <h3 className="statusReady">{elem.Status}</h3>
            </div>
            
            
                 </div>
                 

                 
               ))}
           

               
                
                
                
               


         
                
        
            
        </section>
        </>
      

        
    )
}