const express = require('express')
const router = express.Router();
const path = require('path')


router.use(express.static('client/train3'))
router.route('/')
      .get((req,res)=>{
        console.log('home page queried for train station #3')
      })

module.exports = router