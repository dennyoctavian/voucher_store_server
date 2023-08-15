import mongoose from 'mongoose';
import { env } from '../config/index.js';

main().catch(err => console.log(err));


 async function main() {
    if(env.STAGE === "development"){
        await mongoose.connect(`${env.MONGO_DB_URL}${env.MONGO_DB_LOCALHOST}:${env.MONGO_DB_PORT}/${env.MONGO_DB_NAME}`);
    } else if (env.STAGE === "production"){
        await mongoose.connect(`${env.MONGO_DB_URL}${env.MONGO_DB_USERNAME}:${env.MONGO_DB_PASSWORD}@${env.MONGO_DB_LOCALHOST}:${env.MONGO_DB_PORT}/${env.MONGO_DB_NAME}`);
    }else {
        await mongoose.connect(`${env.MONGO_DB_URL}${env.MONGO_DB_USERNAME}:${env.MONGO_DB_PASSWORD}@${env.MONGO_DB_LOCALHOST}:${env.MONGO_DB_PORT}/${env.MONGO_DB_NAME}`);
    }
  

  console.info("Success Connect to mongodb")

}

