import './style.css'

export default function Opcao (props){
  

    return(
        <div onClick={props.aoClicar} id={props.index} className={props.item.valor} />
    );
}   
  