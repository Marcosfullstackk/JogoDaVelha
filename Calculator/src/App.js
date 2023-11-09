import './App.css'
import React, { useState } from 'react';
import Opcao from './components/opcao/Opcao';

function App() {
  let player1;
  let player2;

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

    async function jogada (jogador, temp) {
      setValores(temp);
      setJogador(jogador);
    }
    
    function verificaVitoria(valores){
      const linhas = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]
      ]

      
      const isBoardFull = valores.every(item => item.valor !== "vazio");
      if(
        (valores[0].valor === 'player1') && (valores[1].valor === 'player1') && (valores[2].valor === 'player1') ||
        (valores[0].valor === 'player1') && (valores[3].valor === 'player1') && (valores[6].valor === 'player1') ||
        (valores[0].valor === 'player1') && (valores[4].valor === 'player1') && (valores[8].valor === 'player1') ||
        (valores[3].valor === 'player1') && (valores[4].valor === 'player1') && (valores[5].valor === 'player1') ||
        (valores[1].valor === 'player1') && (valores[4].valor === 'player1') && (valores[7].valor === 'player1') ||
        (valores[2].valor === 'player1') && (valores[4].valor === 'player1') && (valores[6].valor === 'player1') ||
        (valores[6].valor === 'player1') && (valores[7].valor === 'player1') && (valores[8].valor === 'player1') ||
        (valores[2].valor === 'player1') && (valores[5].valor === 'player1') && (valores[8].valor === 'player1')){
        alert(`VOCE GANHOU ALGO NA SUA VIDA, PARABENS`)
        console.log('ganhow')
        //return true;
      }

      else if(
        (valores[0].valor === 'player2') && (valores[1].valor === 'player2') && (valores[2].valor === 'player2') ||
        (valores[0].valor === 'player2') && (valores[4].valor === 'player2') && (valores[8].valor === 'player2') ||
        (valores[3].valor === 'player2') && (valores[4].valor === 'player2') && (valores[5].valor === 'player2') ||
        (valores[1].valor === 'player2') && (valores[4].valor === 'player2') && (valores[7].valor === 'player2') ||
        (valores[2].valor === 'player2') && (valores[4].valor === 'player2') && (valores[6].valor === 'player2') ||
        (valores[0].valor === 'player2') && (valores[3].valor === 'player2') && (valores[6].valor === 'player2') ||
        (valores[6].valor === 'player2') && (valores[7].valor === 'player2') && (valores[8].valor === 'player2') ||
        (valores[2].valor === 'player2') && (valores[5].valor === 'player2') && (valores[8].valor === 'player2'))
        {
          alert("VOCE GANHOU ALGO NA SUA VIDA, PARABENS");
          console.log('ganhow'); 


         // return true;
        }
        else if (isBoardFull) {
          alert('VELHA');
          console.log('VELHA');
        //  return false;
        }

      }
      
      //alert parabens fulano
      //declara uma variavel vazio
      //setValores(variavelVazia)

    function aoClicar(index){
      
      if(valores[index].valor === "player1" || valores[index].valor === "player2"){
          alert("Nao pode");
        } else {
          if(jogador == 1){
            let temp = [...valores];
            temp[index].valor = "player1";
            jogada(2, temp);
            console.log(`Vez do jogador ${jogador} (1)`);
            
          }else if(jogador == 2){
            setJogador(1);
            let temp = [...valores];
            temp[index].valor = "player2";
            jogada(1, temp);
            console.log(`Vez do jogador ${jogador} (2)`);
          }
        }
        if(verificaVitoria(valores)){
            
        }
    }

    return (
        <body>
            
            <section className="container">
                <h1>JOGO DA VELHA</h1>
            </section>

            <section className='tabuleiro'>
                {valores.map( (item, index) => {
                return (
                  <Opcao aoClicar={aoClicar} item={item} index={index}  />
                );
                })}
            </section>

        </body>
    )
}

export default App;
