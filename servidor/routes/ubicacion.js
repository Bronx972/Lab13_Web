//Rutas producto
const express = require('express');
const router = express.Router();
const ubicacionController = require('../controllers/ubicacionController');

//api/productos
router.post('/', ubicacionController.crearUbicacion);
router.get('/', ubicacionController.obtenerUbicacion);
router.put('/:id', ubicacionController.actualizarUbicacion);
router.get('/:id', ubicacionController.verUbicacion);
router.delete('/:id', ubicacionController.eliminarUbicacion);

module.exports = router;