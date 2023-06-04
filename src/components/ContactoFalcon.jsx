import React,{useState} from 'react'
import {styled} from 'styled-components'
import db from '../firebase/firebaseConfig';
import {doc, deleteDoc,updateDoc}   from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faTrashCan, faCopy } from '@fortawesome/free-solid-svg-icons';



const ContactoFalcon = ({contactos,id}) => {
   
const [editar, seteditar] = useState(true)
const [inputNombre, setinputNombre] = useState(contactos.nombre);
const [inputEmail, setinputEmail] = useState(contactos.correo);
const [inputWhatsapp, setinputWhatsapp] = useState(contactos.whatsapp);



//con esta funcion copiamos elementos, averiguar porque exeCommand esta en desuso
const copiar= ()=>{
    var aux= document.createElement("input");
    aux.setAttribute("value", contactos.whatsapp)
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy")
    document.body.removeChild(aux)
 
}

const actualizarContacto = async(e)=>{ e.preventDefault(); 
     try{
        
     await updateDoc(doc(db, 'usuarios', id),{
       
        nombre: inputNombre,
        correo: inputEmail,
        whatsapp: inputWhatsapp
    }); 

   }
    catch(error){
        console.log(error)
    }

    seteditar(!editar)
    
}

const borrarContacto = async(id)=>{ 
    try{
       
    await deleteDoc(doc(db, 'usuarios', id)); 

  }
   catch(error){
       console.log(error)
   }

   seteditar(!editar)
   
}
    return ( 
    <ContenedorContacto> 
        {!editar ? 
            <Formulario action="" onSubmit={actualizarContacto}>
            <Input type="text"
            placeholder='nombre' 
             value={inputNombre}
            onChange={(e)=>setinputNombre(e.target.value)}
            />

            <Input type="email" placeholder='email'
            value={inputEmail}
            onChange={(e)=>setinputEmail(e.target.value)}
            />

            <Input type="text" placeholder='number'
            value={inputWhatsapp}
            onChange={(e)=>setinputWhatsapp(e.target.value)}
            />

            <Botones type="submit" >Actualizar</Botones>
        </Formulario>
        : 
        <div>
             <ContenedorDatos>
                <Usuario>{contactos.nombre}</Usuario>
                <Email>{contactos.correo}</Email>
                <WhatsApp><FontAwesomeIcon icon={faWhatsapp} />{contactos.whatsapp}
                 <span><FontAwesomeIcon icon={faCopy} onClick={()=>copiar()} /></span></WhatsApp>
            </ContenedorDatos>
            <Botones onClick={()=>seteditar(!editar)}><FontAwesomeIcon icon={faEdit}/> Editar</Botones>
            <Botones onClick={()=>borrarContacto(id)}> <FontAwesomeIcon icon={faTrashCan} />Eliminar </Botones>
        </div>
        

   }

</ContenedorContacto>
     );
     
}
 
const ContenedorContacto= styled.div`
    padding: 15px 0;
    border: 1px dotted #8a8a8a;
    display: flex;
align-content: center;
text-align: center;
flex-flow: column wrap;

`
const ContenedorDatos= styled.div`
    padding: 15px 0;


`
const Usuario= styled.h2`
font-size: 16px;
flex:10;`

const Email= styled.h2`
font-size: 16px;
flex:10;`

const WhatsApp = styled.h2`
font-size: 16px;
font-style: italic;
color: #00c2c1;
flex:10;

span{
    color:#b1b1b1e7;
    padding-left: 20px;
    font-size: 20px;
    transition: color ease .3s;
    cursor: pointer;
}

span:hover{
    color:#00c2c25f;

}

`

const Botones= styled.button`
    margin-left:10px;
    padding: 10px 20px ;
    flex: 10;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    color: #d8e88d;
    background-color: #00c2c3;
    cursor: pointer;
    transition: all ease .3s;
    &:hover{
        background-color: hsl(180.30769230769232, 50%, 38.23529411764706%);  
    }
    

`
const Formulario = styled.form`
display: flex;
flex-flow: column wrap;
`
const Input = styled.input`
font-size: 18px;
padding: 10px 20px;
margin-bottom: 5px;
border-radius: 5px;
border: 1px solid #6b6b6b4d;



`

export default ContactoFalcon;