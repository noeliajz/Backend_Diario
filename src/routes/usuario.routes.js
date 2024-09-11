import { Router } from "express";
import { agregarArticulosAusuarios, crearUsuario, editarUsuario, eliminarUsuario, obtenerUsuario } from "../controllers/usuario.controllers";

const router = Router()
router.route('/usuario').get(obtenerUsuario).post(crearUsuario)
router.route('/usuario/:id').put(editarUsuario).delete(eliminarUsuario)
router.route('/usuario/:id').post(agregarArticulosAusuarios)
export default router