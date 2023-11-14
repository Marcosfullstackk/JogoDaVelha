import { useState } from 'react';
import './Placar.css'

export default function Placar (props) {
    if (props.linhas === 'player1') {
        props.placar1 ++
        
    }
    return(
        <div className='placar'>
            <h1 className='player'>{props.player1} : {props.placar1}</h1>
            <h1 className='player'>{props.player2} : {props.placar2}</h1>
        </div>
        
    );
}