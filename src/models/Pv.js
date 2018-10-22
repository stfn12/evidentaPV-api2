import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema({
  serie: { type:String, required: true, uppercase: true, createIndex: true },
  numar: { type:Number, required: true },
  data_intocmire: { type:Date },
  marca: { type:Number, required: true, createIndex: true },
  contravenient: { type:String, required: true, createIndex: true },
  cnp: {type: Number, required: true, createIndex: true  },
  adresa: { type:String },
  localitate: { type:String, required: true },
  suma: { type:Number },
  mod_intocmire: { type:String }
}, {timestamps: true});

//schema.plugin(uniqueValidator, {message: 'Serie si numar existente'});

export default mongoose.model('Pv', schema);
