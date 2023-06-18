const mongoose = require('mongoose');

const UbicacionSchema = mongoose.Schema({
    
    departamento: {
        type: String,
        require: true
    },
    distrito: {
        type: String,
        require: true
    },
    c_lat: {
        type: String,
        require: true
    },
    c_long: {
        type: Number,
        require: true
    },
    lat1: {
        type: Number,
        require: true
    },
    long1: {
        type: Number,
        require: true
    },
    lat2: {
        type: Number,
        require: true
    },
    long2: {
        type: Number,
        require: true
    },
    lat3: {
        type: Number,
        require: true
    },
    long3: {
        type: Number,
        require: true
    },
    
});

module.exports = mongoose.model('Ubicacion', UbicacionSchema)