require('dotenv').config()
const express = require('express')
const app = express();
const PORT = !process.env.PORT ? 3004 : process.env.PORT


const stations = [...new Array(3).fill('')].map((_,i)=>{
    return require(`./routes/station${i+1}.js`)
})

// middleware
app.use(express.static('client/public'))

stations.forEach((st,idx)=>{
    app.use(`/station${idx+1}`,st)
})

// app.use('/station1',require('./routes/station1'))
// app.use('/station2',require('./routes/station2'))
// app.use('/station3',require('./routes/station3'))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})