import express, { urlencoded } from 'express';
import urlRoute from './routes/url.js'
import { connectdb } from './connect.js';
import URL from './models/url.js';
import path from 'path';
import staticRouter from './routes/staticRouter.js'

const app=express();
connectdb('mongodb://127.0.0.1:27017/Url-Shortner').then(console.log("MongoDb connected !"));

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:false}));
//^for parsing form data
//middlewares


//routes
app.use('/',staticRouter);
app.use('/url',urlRoute);
//routes


app.listen(8000,()=>{
    console.log('Server Started!');
})