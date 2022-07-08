import mongoose from "mongoose";

try{

  await mongoose.connect(process.env.URI_MONGODB);
  console.log('✅ Conexion a la base de datos satisfactoria');

} catch(error){
  console.log('🚨 Error de conexion a mongoDB: ' + error);
}