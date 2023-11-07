import './style.css';
import Opcao from './components'

function App() {
    return (
        <body>

          <div className="container">
              <h1>JOGO DA VELHA</h1>
          </div>

          <div className='tabuleiro'>
              <Opcao/>
              <div id="caixa_2" className='caixa_2'></div>
              <div id="caixa_3" className='caixa_3'></div>
              <div id="caixa_4" className='caixa_4'></div>
              <div id="caixa_5" className='caixa_5'></div>
              <div id="caixa_6" className='caixa_6'></div>
              <div id="caixa" className='caixa_7'></div>
              <div id="caixa" className='caixa_8'></div>
              <div id="caixa" className='caixa_9'></div>
          </div>

        </body>
  );
}

export default App;
