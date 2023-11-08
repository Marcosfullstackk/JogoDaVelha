import './App.css'
import React, { useState } from 'react';
import Opcao from './components/opcao/Opcao';

function App() {
    const [valores, setValores] = useState ([
      {"valor": "vazio"},
      {"valor": "player1"},
      {"valor": "player2"},
      {"valor": "vazio"},
      {"valor": "vazio"},
      {"valor": "vazio"},
      {"valor": "vazio"},
      {"valor": "vazio"},
      {"valor": "vazio"}
    ]);
   const [jogador, setJogador] = useState (1);

    alert(`Vez do jogador ${jogador}`)

   function aoClicar(index){
    if(jogador === 1){
     setJogador (2);
     //setValores
     // valores[index] = 1
     console.log(jogador)
    }
    else if(jogador === 2){
      setJogador(1);
      console.log(jogador)
      // valores[index] = 2
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
              <Opcao  aoClicar={aoClicar} item={item} index={index} />
            );
          })}
      </section>

    </body>
  );
}

export default App;
