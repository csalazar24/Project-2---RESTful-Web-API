const mongoose = require('../db');

const pokeSchema = new mongoose.Schema({
    no:         { type: Number, required: true },
    name:       { type: String },
    type:       [String],
    species:    { type: String },
    height:     { type: Number },
    weight:     { type: Number},

}, {
    toJSON: {
        transform: (doc, obj, options) => {
            obj.id = obj._id;
            delete obj._id;
            delete obj.__v;
            return obj;
        }
    }
});

const Pokemon = mongoose.model('Pokemon', pokeSchema);

module.exports = Pokemon;