import Articulo from '../models/articulo'
import Usuario from '../models/usuario'

export const obtenerUsuario = async(req, res) => {
    try {
        const usuarios = await Usuario.find()  
        res.status(200).json(usuarios)

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'error al buscar usuario'
        })
    }
}

export const crearUsuario = async(req, res) => {
    try {
        const newUsuario = new Usuario(req.body)
        const articulo = new Articulo()
        newUsuario.idArticulo = articulo._id
        await newUsuario.save()
        res.status(201).json({
            mensaje: 'Se creó el usuario'
        })
        console.log(newUsuario)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'Error al crear usuario',
            error: error.message
        })
    }
     
}
export const agregarArticulosAusuarios = async (req, res) => {
    try {
        // Obtener IDs del cuerpo de la solicitud o parámetros de la URL
        const { id } = req.params;

        // Buscar el usuario por ID
        const getUsuario = await Usuario.findById(id);
        // Buscar el artículo por ID
        const nuevoarticulo = await Articulo(req.body)
        // Verificar si el usuario y el artículo existen
        if (!getUsuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
       

        // Agregar el artículo al array de artículos del usuario
        getUsuario.articulos.push(nuevoarticulo); // Solo guardamos el ID del artículo

        // Guardar los cambios en la Base de Datos
        await getUsuario.save();
        await nuevoarticulo.save();

        // Responder con éxito
        res.status(200).json({ mensaje: 'Artículo agregado al usuario con éxito' });
    } catch (error) {
        // Manejo de errores
        console.error(error);
        res.status(500).json({ mensaje: 'Error al agregar el artículo al usuario' });
    }
};

export const editarUsuario = async(req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: 'el usuario se actualizo '
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'error al actualizar el usuario'
        })
    }
}

export const eliminarUsuario = async(req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: 'se eliminó el usuario'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'error al eliminar usuario'
        })
    }
}