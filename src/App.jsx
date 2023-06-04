import React from 'react'
import { styled } from 'styled-components'
import FormularioAgregarUsuario from './components/FormularioAgregarUsuario';
import ListaContacto from './components/ListaComponente';


const App = () => {
  return (  

    <Contenedor>
        <Titulo> Agenda de Contactos </Titulo>
        <FormularioAgregarUsuario></FormularioAgregarUsuario>
        <ListaContacto></ListaContacto>
    </Contenedor>



  );
}

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  max-width: 600px;
  height: 100%;
  margin-top: 50px;
  background-color: #f0f9ff;
  box-shadow: -5px 4px 18px -1px rgba(135,135,135,0.48);
`

const Titulo = styled.h1`
text-align: center;
font-size: 24px;
margin-top: 20px;
color: #00c2c1;

`

export default App;