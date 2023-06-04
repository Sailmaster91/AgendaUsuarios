import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Contacto from './Contacto'
import db from '../firebase/firebaseConfig'
import { collection, onSnapshot } from 'firebase/firestore'
import ContactoFalcon from './contactoFalcon'



const ListaContacto = () => {

    const [contactos, setcontacto] = useState([])

    useEffect(() => {
        onSnapshot(
            collection(db, 'usuarios'),
            (snap)=>{

            const arregloUsuario = 
               snap.docs.map((documento)=>{
                   return{ ...documento.data(), id: documento.id}
               
            })
            setcontacto(arregloUsuario);

        }, [])})



    return ( 
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto)=>(
            
            <ContactoFalcon contactos={contacto} key={contacto.id} id={contacto.id} />
            // <Contacto contactos={contacto} key={contacto.id}/>
            
            
            ))     
           }
        </ContenedorContactos> 
    );
}
const ContenedorContactos= styled.div`
margin-top: 20px;

`


export default ListaContacto;