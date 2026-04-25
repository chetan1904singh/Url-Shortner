import mongoose from "mongoose";
async function connectdb(url){
     return mongoose.connect(url);
}
export {connectdb};