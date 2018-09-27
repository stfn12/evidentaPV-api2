import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema({
  contravenient: { type:String, required: true, createIndex: true },
  cnp: {type: Number, required: true, createIndex: true  },
  numar: { type:Number, required: true },
  data: { type:Date },
  suma: { type:Number}
}, {timestamps: true});

//schema.plugin(uniqueValidator, {message: 'Serie si numar existente'});

export default mongoose.model('Chitanta', schema);
