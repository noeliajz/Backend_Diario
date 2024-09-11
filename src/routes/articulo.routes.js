import { Router } from "express";
import { crearArticulo, obtenerArticulos } from "../controllers/articulo.controllers";

const router = Router()
router.route('/articulo').post(crearArticulo).get(obtenerArticulos)
export default router