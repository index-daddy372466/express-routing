require('dotenv').config()
const express = require('express')
const app = express();
const PORT = !process.env.PORT?3000:process.env.PORT


// middleware
app.use(express.static('client/public'))
// routing base
const stations = [...new Array(3).fill('')].map((_,i)=>{
    return require(`./routes/station${i+1}`)
})
stations.forEach((st,idx) => {
   app.use(`/station${idx+1}`,st) 
})
// app.use(`/station1`,require('./routes/station1.js'))
// app.use(`/station2`,require('./routes/station2.js'))
// app.use(`/station3`,require('./routes/station3.js'))
// listening 
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})