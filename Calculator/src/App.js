import './App.css'
import React, { useState } from 'react';
import Opcao from './components/opcao/Opcao';

function App() {
    const [valores, setValores] = useState ([
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"},
        {"valor": "vazio"}
    ]);
    const [jogador, setJogador] = useState (1);

    // alert(`Vez do jogador ${jogador}`)

    // function verificaVitoria(valores){
    //   const linhas = [
    //     [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    //     [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    //     [0, 4, 8], [2, 4, 6]]

    //     if( valores == linhas){
    //       console.log("voce ganhou")
    //     }
      
      //alert parabens fulano
      //declara uma variavel vazio
      //setValores(variavelVazia)
    }

    function aoClicar(index){
        if(valores[index].valor === "player1" || valores[index].valor === "player2"){
          alert("Nao pode");
        } else {
          if(jogador == 1){
            let temp = [...valores];
            temp[index].valor = "player1";
            setValores(temp);
            setJogador(2);
            console.log(`Vez do jogador ${jogador} (1)`);
          }else if(jogador == 2){
            setJogador(1);
            let temp = [...valores];
            temp[index].valor = "player2";
            setValores(temp);
            console.log(`Vez do jogador ${jogador} (2)`);
          }
        }
        verificaVitoria();
    }

    return (
        <body>

            <section className="container">
                <h1>JOGO DA VELHA</h1>
            </section>

            <section className='tabuleiro'>
                {valores.map( (item, index) => {
                return (
                  <Opcao aoClicar={aoClicar} item={item} index={index} />
                );
                })}
            </section>

        </body>
    );
}

export default App;
