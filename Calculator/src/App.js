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

   function aoClicar(){
    if(jogador === 1){
     setJogador (2);
    }
    else if(jogador === 2){
      setJogador(1) ;

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
              <Opcao  aoClicar={() => aoClicar(index)} item={item} index={index} />
            );
          })}
      </section>

    </body>
  );
}

export default App;
