const express = require('express')
const router = express.Router()


// middleware 
router.use(express.static('client/station3'))


module.exports = router