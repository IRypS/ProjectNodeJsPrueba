import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  precio: {
    type: Number
  },
  descripcion: {
    type: String,
  }
});


export const Product = mongoose.model('Product', productSchema);
