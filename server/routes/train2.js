const express = require('express')
const router = express.Router();
const path = require('path')
const dir = path.resolve(__dirname,'..','..','client','train2')
router.use(express.static('client/train2'))
const sending = require('../lib/fileSend.js')
router.route('/')
      .get((req,res)=>{
        console.log('home page queried for train station #2')
      })
      router.route('/hello')
      .get((req,res)=>{
        console.log('Hello Train 2')
        // res.sendFile(dir+"/test.html")
        sending(res,dir,'/test.html')
      })
      router.route('/shop')
      .get((req,res)=>{
        console.log('Hello Train 2-shop')
        // res.sendFile(dir+"/shop.html")
        sending(res,dir,'/shop.html')
      })

module.exports = router