const express = require('express')
const router = express.Router()


// middleware 
router.use(express.static('client/station2'))

router.route('/redirect-me').get((req,res)=>{
    // redirect
    res.redirect('/station1/test')
})

module.exports = router