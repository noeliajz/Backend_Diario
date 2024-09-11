import { Schema, model } from "mongoose";

const usuarioSchema = new Schema ({
    nombre:{
       type: String,
       minLength: 3,
       maxLength: 15,
       required: true
    },
    apellido: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: true
    },
    rol:{
     type: String,
     required: true
    },
    usuario: {
        type: String,
        minLength: 3,
        maxLength: 25,
        required: true,
        unique: true
    },
    contrasenia:{
        type: String,
        required: true,
        minLength: 3,
        maxLength:10
    },
   
    articulos:[]

})
const Usuario = model('usuario', usuarioSchema)
export default Usuario