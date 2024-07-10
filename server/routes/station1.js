const express = require('express')
const router = express.Router()


// middleware 
router.use(express.static('client/station1'))

// station1/test
router.route('/test').get((req,res)=>{
    res.send('test pass')
})


module.exports = router