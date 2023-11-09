import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import UsuarioProvider from 'common/contexts/Usuario';
import CarrinhoProvider from 'common/contexts/Carrinho';
import Carrinho from 'pages/Carrinho';
import { PagamentoProvider } from 'common/contexts/Pagamento';
import { UsuarioContext } from 'common/contexts/Usuario';

export default function Routes() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = usestate(0);
  return (
    <Router>
      <Switch>
        <PagamentoProvider>
          <UsuarioProvider>
            <Route exact path="/">
              <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
                <Login/>
              </UsuarioContext.Provider>
              <Login nome ={nome} setNome= {setNome} saldo = {saldo} setSaldo= {setSaldo}/>

            </Route>
            <CarrinhoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </CarrinhoProvider>
          </UsuarioProvider>
        </PagamentoProvider>
      </Switch>
    </Router>
  )
};