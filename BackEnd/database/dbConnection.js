import mongoose from "mongoose";


const connectDB = () => {
    try{
        mongoose.connect(process.env.MONGO_URL,{
            dbName : 'RESTAURTANT'
        });
        console.log(`Database connected Successfully!`);
    }catch(error){
        console.log(`Error occured while connecting DB ${error.message}`)
    }
    

}


export default connectDB;