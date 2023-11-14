import './App.css'
import React, { useState, useEffect } from 'react';
import Opcao from './components/opcao/opcao/Opcao';
import Placar from './components/Placar';

function App() {
  const jogo = [
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" },
    { "valor": "vazio" }
  ];

  const [valores, setValores] = useState(jogo);
  const [jogador, setJogador] = useState(1);
  const [podeJogar, setPodeJogar] = useState(true);
  const [nomeJogador1, setNomeJogador1] = useState('');
  const [nomeJogador2, setNomeJogador2] = useState('');
  const [placar1, setPlacar1] = useState (0);
  const [placar2, setPlacar2] = useState (0);  

  function recomecar() {
    setValores(jogo);
    setJogador(1);
    setPodeJogar(true);
}
  function jogada (jogador, temp) {
    setValores(temp);
    setJogador(jogador);
  }
  
    function verificaVitoria(valores){
    const linhas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  
      [0, 4, 8], [2, 4, 6]
    ];

    for (const linha of linhas) {
      const [a, b, c] = linha;
      if (
          valores[a].valor === valores[b].valor &&
          valores[b].valor === valores[c].valor &&
          valores[a].valor !== 'vazio'
      ) {
          valores[a].vencedor = true;
          valores[b].vencedor = true;
          valores[c].vencedor = true;
          setPodeJogar(false);
          alert(` ${valores[a].valor === 'player1' ? `Parabens, Vitória do ${nomeJogador1}` : `Parabens, Vitória do ${nomeJogador2}`} `);
          return;
      }
       else if (valores[a].valor != 'player1' && valores[a].valor === 'player2' ) {
          alert('VELHA');
          console.log('VELHA');
          //  return false;
          //musica do i felling good
        }
    }
    

      
      }
      
      //alert parabens fulano
      //declara uma variavel vazio
      //setValores(variavelVazia)
      
      function aoClicar(index){
        if(podeJogar){
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
        } else {
          return false;

        }
      }
    
      useEffect(() => {
    
        const timeoutId = setTimeout(() => {
          verificaVitoria(valores);
        }, 1000);
        return () => clearTimeout(timeoutId);
      }, [valores]);

      
      useEffect(() => {
        const nome1 = prompt("Digite o nome do Jogador 1:");
        const nome2 = prompt("Digite o nome do Jogador 2:");
      
        setNomeJogador1(nome1 || "Jogador 1");
        setNomeJogador2(nome2 || "Jogador 2");
      }, []);

    return (
      <body>
        
        <section className="container">
            <h1>JOGO DA VELHA </h1>
        </section>

        <Placar player1={nomeJogador1} player2={nomeJogador2} placar1={placar1} placar2={placar2}/>
          
        <section className='tabuleiro'>
            {valores.map( (item, index) => {
              return (
                <Opcao aoClicar={aoClicar} item={item} index={index}  />
                );
              })}
        </section>

        <footer>
          <button onClick={recomecar} className='reset'>Recomeçar</button>
        </footer>

      </body>
    )
}

    export default App;