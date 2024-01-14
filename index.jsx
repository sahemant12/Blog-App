require('dotenv').config()
const blogRouter = require('./routes/blog.jsx')
const cors = require('cors') //connecting to frontend(react)
const mongoose = require('mongoose')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL)
    console.log("DB Connected")
}

const express = require('express')
const app = express()
app.use(express.json())
app.use(cors({
  origin: 'https://blog-h7m8zyute-sahemant12.vercel.app/', // replace with your Vercel app's domain
  credentials: true,
}));
app.use(express.static(process.env.PUBLIC_DIR));
app.use('/',blogRouter.router)

app.listen(process.env.PORT,()=>{
    console.log("App is listening")
})