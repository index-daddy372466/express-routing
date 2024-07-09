const express = require('express')
const router = express.Router();
const path = require('path')


router.use(express.static('client/train1'))
router.route('/')
      .get((req,res)=>{
        console.log('home page queried for train station #1')
      })

module.exports = router