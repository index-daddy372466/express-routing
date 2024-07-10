const express = require('express')
const router = express.Router()

// middleware
router.use(express.static('client/station2'))


module.exports = router