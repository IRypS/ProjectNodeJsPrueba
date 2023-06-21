import mongoose from "mongoose";

const MONGO_URI = 'mongodb://root:iryps@mongo-host:27017/product?authSource=admin';
// const MONGO_URI = 'mongodb://root:iryps@localhost:22017/product?authSource=admin';
// const MONGO_URI = 'mongodb://MONGO_INITDB_ROOT_USERNAME:MONGO_INITDB_ROOT_PASSWORD@localhost:puerto/BASEDEDATOS?authSource=admin';

try{

  await mongoose.connect(MONGO_URI);
  console.log('✅ Conexion a la base de datos satisfactoria');
  
} catch(error){
  console.log(process.env) 
  console.log('🚨 Error de conexion a mongoDB: ' + error);
}