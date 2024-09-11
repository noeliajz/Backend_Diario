import Articulo from "../models/articulo";

    export const crearArticulo = async(req,res) => {
        try {
             const newArticulo =  new Articulo(req.body)
             newArticulo.save() 
            res.status(201).json({
                mensaje: 'se creo el artículo'
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                mensaje: 'error al crear articulo'
            })
        }
    }

    export const obtenerArticulos = async(req, res) => {
        try {
            const articulos = await Articulo.find()  
            res.status(200).json(articulos)
    
        } catch (error) {
            console.log(error)
            res.status(400).json({
                mensaje: 'error al buscar articulos'
            })
        }
    }
    