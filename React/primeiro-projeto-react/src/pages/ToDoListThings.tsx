import { ChangeEvent, useState } from "react"
import "../index.css" //importação do webPage apptsx
import Counter from "../assets/components/counter"
import NewComponent from "../assets/components/NewComponent"

function ToDoListThings(){ 
 
  


  

    const [newItem, setNewItem] = useState("");
  const[items, setItems] = useState<string[]>([])

 
     const handleOnInputChange = (e: ChangeEvent <HTMLInputElement>) => {
       setNewItem(e.target.value);
     }
 
  const handleOnclick = () => {
     if(newItem.length > 0){
     setItems([...items, newItem]);
     setNewItem("");
     }else{
       alert('não é possivel add um novo item sem descrição')
     }
   };
     
   return (

   <>
   <div className="container"/>
 
     <Counter item={items.length}>
     </Counter>
 
     <div className="delta">
     <NewComponent
     onSubmit={handleOnclick}
     onInputChange={handleOnInputChange}
     inputValue={newItem.length > 0? newItem:""}
     />
     </div>
     
       
     {items.length > 0 && (
       <div>
         {items.map((item, index) => (
             <h4 key={index}>{item}</h4> 
      ))}
       </div>
     )}
     </>
   )
 }
 
 export default ToDoListThings