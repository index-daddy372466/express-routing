const express = require('express')
const router = express.Router()

// middleware
router.use(express.static('client/station3'))



router.route('/friend-house').get((req,res)=>{
    res.redirect('/station1/house-of-friend')
})


module.exports = router