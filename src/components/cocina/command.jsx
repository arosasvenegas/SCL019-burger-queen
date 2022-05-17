import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, updateDoc, doc, onSnapshot} from "firebase/firestore";
import "./command.css"




export const ToPrepare = ({count, name}) =>{

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

const statusChange =  async (idOrder) =>{
    const postEdit = doc(db, "commands", idOrder);
    await updateDoc(postEdit, {
        Status: 'Listo',
    });
};

const orderFinish = command.filter((order) => {
    return order.Status === "pendiente";
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
            
            <h2>Pedidos Pendientes</h2>
           
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
            
            <button className="btnReadyCommand" onClick={() => statusChange(elem.id)}>Listo!</button>
                 </div>
                 

                 
               ))}
        
            
        </section>
        </>
      

        
    )
}