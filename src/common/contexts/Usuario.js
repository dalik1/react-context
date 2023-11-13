import { createContext, useState } from 'react';

export const usuarioContext= createContext();

export const UsuarioProvider= ({childrem})=> {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = usestate(0);
  return (
    <usuarioContext.provider value= {{nome, setNome, saldo, setSaldo}}>

    </usuarioContext.provider>
  )
}