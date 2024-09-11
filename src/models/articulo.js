import { Schema, model } from "mongoose";

const articuloSchema = new Schema ({
  titulo:{
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true
  },
  subtitulo: {
    type: String,
    minLength: 3,
    maxLength: 30
  },
  texto:{
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true
  },
  idUsuario: {
    type: String
},
})

const Articulo = model('articulo', articuloSchema)
export default Articulo