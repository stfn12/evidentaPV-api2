import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePagination from 'mongoose-paginate';

const schema = new mongoose.Schema({
  marca: {type: String, required: true, createIndex: true, unique: true },
  nume: { type:String, required: true, createIndex: true }
}, {timestamps: true});

schema.plugin(uniqueValidator, {message: 'Marca existenta'});
schema.plugin(mongoosePagination);

export default mongoose.model('Controlor', schema);
