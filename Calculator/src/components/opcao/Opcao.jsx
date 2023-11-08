import './style.css'

export default function Opcao (props){
    return(
        <section onClick={props.aoClicar(props.index)} id={props.index} className={props.item.valor} />
    );
}   
  