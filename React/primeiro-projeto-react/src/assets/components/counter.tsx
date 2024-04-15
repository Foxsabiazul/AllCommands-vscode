

interface props{
    item: number;
}

function counter (props: props) {
    return(
        <div className='Counter'>
            <p>O número de itens é: {props.item}</p>
        </div>
    )
}

export default counter;