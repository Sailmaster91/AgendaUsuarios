import React from 'react'
import { styled } from 'styled-components'


const Contacto = ({contactos}) => {
    const tab = '\u00A0'
    return (
        
        <ContenedorContacto>
            <div className='ctn'>
                <ContenedorDatos>Nombre:{tab +contactos.nombre}</ContenedorDatos>
                <ContenedorDatos>Correo:{tab + contactos.correo}</ContenedorDatos>
            </div>
            <ContenedorWhatsApp>Whatsapp: {tab +contactos.whatsapp}</ContenedorWhatsApp>
            <Btn>Editar</Btn>
            <Btn>Eliminar</Btn>
           
        </ContenedorContacto>
            
      );
}
const ContenedorContacto = styled.div`
    width:98%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    color: #484848;
    border: 2px solid  #76e2e2;
    margin: 5px;
    box-sizing:border-box ;


   
    .ctn{
        display: flex;
        width: 100%;
        flex-flow: row nowrap;
    }
        
`
const ContenedorDatos = styled.div`
    width: 50%;
    padding-left: 20px;
    padding-top: 10px;
    float: left;
    background-color: #f5f5fd;
 
    &:first-of-type{
            border-right:3px  solid #909090;

        }

`
const ContenedorWhatsApp = styled.div`
    padding: 20px;
    
    
    width: 100%;
    font-size: 18px;
    text-align: center;
    display: inline-block;
    background-color: #76e2e2;

`
const Btn = styled.button`
width: 30%;
display: inline-block;
border: none;
padding: 10px 15px;
margin-bottom: 10px;



`
export default Contacto;