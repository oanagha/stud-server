//check the class (19/10/2024,26/10)

require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/routes')
require('./connection/db')
const server=express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/uploads',express.static('./uploads'))

const PORT=3000 || process.env.PORT

server.listen(PORT,()=>{
  console.log(`server ruuning at: ${PORT}`);
    
})