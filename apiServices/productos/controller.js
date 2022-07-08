import { Product } from './models.js';

export const listar = async(req, res) => {
  try{
    const productos = await Product.find();
    res.status(200).json({ data: productos });
  } catch(error){
    console.log(error.message);
  }
}

export const buscarProducto = async(req, res) => {
  try{
    const { id } = req.params;
    const producto = await Product.find({ _id: id });
    res.status(200).json({ producto: producto });
  } catch(error){
    console.log(error.message);
    return res.status(501).json({ message: error.message });
  }
};

export const guardar = async(req, res) => {
  try{
    const { nombre, precio, descripcion } = req.body;

    const product = new Product({ nombre, precio, descripcion });
    await product.save();

    res.status(200).json({ status: "succes", data: product });

  } catch(error){

    if(error.code == 11000){
      return res.status(400).json({ message: "No puedes ingresar un nombre de producto duplicado" });
    }

    console.log(error.message);
  }
};

export const actualizar = async(req, res) =>  {
  try{
    //reconocer id
    const { id } = req.params;
    //reconocer el body
    const { nombre, precio, descripcion } = req.body;

    //buscar el id
    const producto = await Product.find({ _id: id });

    if(!producto){
      res.send("No existe el producto deseado");
    }

    //actualziar
    const actualizar = await Product.updateOne( {_id: id }, { nombre, precio, descripcion } );

    res.status(200).json({ data: actualizar });

  }catch(error){
    console.log(error);
    return res.status(500).send("Error en el servidor")
  }
};

export const eliminar = async(req, res) => {
  try{
    const { id } = req.params;
    const producto = await Product.find({ _id: id });
    if(!producto){
      res.send("No existe el producto deseado");
    }
    const borrar = await Product.deleteOne({ _id: id });
    res.status(200).json({ status: "producto eliminado", respuesta: borrar });
  }catch(error){
    console.log(error);
    return res.status(500).send("Error en el servidor")
  }
};