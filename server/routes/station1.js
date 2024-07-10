const express = require('express')
const router = express.Router()

// middleware
router.use(express.static('client/station1'))

// /station/test
router.route('/test').get((req,res)=>{
    res.send('test passes')
})

// statioin1/house-of-friend
router.route('/house-of-friend').get((req,res)=>{
    res.send('Hey buddy, you can crash here!')
})

module.exports = router