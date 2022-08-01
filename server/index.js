import { createRequire } from "module";

import Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);

import authrouter from './routes/authrouter.js';
import postrouter from './routes/postrouter.js';


const app=Express();
app.use(cors());
const path = require("path");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
dotenv.config();

app.use('/api/auth',authrouter  );
app.use('/postdata',postrouter  );


app.get("/", (req, res) => {
    
    res.send("API RUNNING");
})


const CONNECTION_URL ="mongodb+srv://root:root@cluster0.7ptfn.mongodb.net/SOCIAL-BLOG?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL,( { useNewUrlParser: true, useUnifiedTopology: true }))
.then(()=>app.listen(PORT,()=>console.log(`listening to port ${PORT}`)))
.catch((err)=>console.log(err))