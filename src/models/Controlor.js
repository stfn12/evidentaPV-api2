import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema({
  marca: {type: Number, required: true, createIndex: true  },
  nume: { type:String, required: true, createIndex: true }
}, {timestamps: true});

//schema.plugin(uniqueValidator, {message: 'Serie si numar existente'});

export default mongoose.model('Controlor', schema);
