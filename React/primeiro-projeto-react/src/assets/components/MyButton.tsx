import { ReactNode } from "react";
import "./MyButton.css"


interface Props{
        children: ReactNode;
        onClick: () => void;

}

function MyButton (props:Props){
    return(
        <button className= "00" onClick={props.onClick}> {props.children}</button>
    )
}

export default MyButton