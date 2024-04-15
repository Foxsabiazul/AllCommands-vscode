import { ChangeEvent } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

interface Props {
    onSubmit: () => void;
    onInputChange: (e:ChangeEvent<HTMLInputElement>) => void;

    inputValue: string;

}
function NewComponent(props: Props){
    return(
        <div className='form'>
            <MyInput type='text' placeholder='nuossa' bgcolor='greenlight' 
            onChange={props.onInputChange}value={props.inputValue}/>
        
            <MyButton onClick={props.onSubmit}>suus</MyButton>
        </div>
    )

}

export default NewComponent