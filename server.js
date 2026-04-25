import express, { urlencoded } from 'express';
import urlRoute from './routes/url.js'
import { connectdb } from './connect.js';
import URL from './models/url.js';
const app=express();
connectdb('mongodb://127.0.0.1:27017/Url-Shortner').then(console.log("MongoDb connected !"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/url',urlRoute);

//redirect route

//

app.listen(8000,()=>{
    console.log('Server Started!');
})