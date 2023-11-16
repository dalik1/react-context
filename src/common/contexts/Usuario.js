import { createContext, useState } from 'react';

class Componente extends reactRouterDom.Component{
  render(){
    return(
      <>
      </>
    )
  }
}
Componente.contextType = UsuarioContext;
export const usuarioContext= createContext();
UsuarioContext.displayName= "Usuario";
export const UsuarioProvider= ({childrem})=> {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = usestate(0);
  return (
    <usuarioContext.provider value= {{nome, setNome, saldo, setSaldo}}>

    </usuarioContext.provider>
  )
}