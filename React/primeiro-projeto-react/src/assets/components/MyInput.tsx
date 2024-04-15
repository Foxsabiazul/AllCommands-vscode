import { ChangeEvent} from "react";
import "./MyInput.css"

interface Props{
   type: string;
   placeholder?: string; 
   bgcolor: string;
   value?: string;

   onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
}

function MyInput(props: Props){
    return( 
        <>
            
            <input 
            type={props.type}  
            placeholder={props.placeholder}
            style={{backgroundColor:`${props.bgcolor}`}}
           onChange={props.onChange} 
           value={props.value}
           
           />
        </>        
    )
}

export default MyInput