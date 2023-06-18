const Ubicacion = require("../models/Ubicacion");

exports.crearUbicacion = async (req, res) => {
    try {
        const ubicacion = new Ubicacion(req.body);

        await ubicacion.save();
        res.send(ubicacion);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUbicacion = async (req, res) => {

    try {

        const ubicaciones = await Ubicacion.find();
        res.json(ubicaciones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarUbicacion = async (req, res) => {

    try {

        const {_id, departamento, distrito, c_lat, c_long, lat1, long1, lat2, long2, lat3, long3 } = new Ubicacion(req.body);
        let ubics = await Ubicacion.findById(req.params.id);

        if(!ubics){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        ubics._id = _id;
        ubics.departamento = departamento;
        ubics.distrito = distrito;
        ubics.c_lat = c_lat;
        ubics.c_long = c_long;
        ubics.lat1 = lat1;
        ubics.long1 = long1;
        ubics.lat2 = lat2;
        ubics.long2 = long2;
        ubics.lat3 = lat3;
        ubics.long3 = long3;

        console.log(ubics)

        ubics = await Ubicacion.findOneAndUpdate({ _id: req.params.id }, ubics, { new: true } );
        res.json(ubics);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verUbicacion = async (req, res) => {

    try {

        let ubics = await Ubicacion.findById(req.params.id);

        if(!ubics){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(ubics);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarUbicacion = async (req, res) => {

    try {

        let ubics = await Ubicacion.findById(req.params.id);

        if(!ubics){
            res.status(404).json({ msg: 'No existe la ubicacion'});
        }

        ubics = await Ubicacion.findOneAndRemove(req.params.id);

        res.json({ msg: 'La ubicación: ' + ubics.departamento + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

