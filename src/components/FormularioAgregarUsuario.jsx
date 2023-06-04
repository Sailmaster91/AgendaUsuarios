import React,{useState} from 'react'
import  styled  from 'styled-components';
import db from '../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const FormularioAgregarUsuario = () => {
    const [nombre, actualizarNombre] = useState("")
    const [correo, actualizarCorreo] = useState("")
    const [whatsapp, actualizarWhatsapp] = useState("");


    const onSubmit= async (e) => {
        e.preventDefault();
        try{

            await addDoc(collection(db, 'usuarios'),{
                 nombre: nombre,
                 correo: correo,
                 whatsapp: whatsapp
        } );}catch(error){
            console.log("Ha ocurrido un error");
            console.log(error)
        }

        actualizarNombre("");
        actualizarCorreo("");
        actualizarWhatsapp("");

    }
    return (  
        <FormularioPlus type="" onSubmit={onSubmit}>
            <ContenedorInput>
            <InputPlus type="text" 
             placeholder='Nombre'
              name='nombre'
              onChange={(e)=>actualizarNombre(e.target.value)}
              value={nombre}/>
            <InputPlus type="email"
             placeholder='Correo'
              name='correo'
              onChange={(e)=>actualizarCorreo(e.target.value)} 
              value={correo}/>
            <InputPlus type="text"
             placeholder='WhatsApp'
              name='whatsapp' 
              onChange={(e)=>actualizarWhatsapp(e.target.value)}
              value={whatsapp}/>
            </ContenedorInput >
            <Boton type="submit">Agregar</Boton>
        </FormularioPlus>


    );
}




const FormularioPlus= styled.form`
    text-align: center;
`
const InputPlus= styled.input`
width: 100%;
padding: 20px 15px;
border-radius: 6px;
border: none;
margin-bottom: 20px;
font-size: 16px;
line-height: 16px;
outline: none;

    &:focus{
        outline: none;
        padding: 18px 15px;
        border-bottom: solid 4px #006767;

    }
`

const Boton= styled.button`
    width: 100%;
    padding: 20px;
    background: #00c2c1;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    cursor:pointer;
    transition: all ease-in-out .3s;
    &:hover{
       background-color: #007574;
    }
`
const ContenedorInput = styled.div`
  padding: 0 20px;
  margin-top: 20px;
`
export default FormularioAgregarUsuario;