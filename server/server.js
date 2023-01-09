const express = require('express')
const cors = require('cors');
const app = express()
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const {navbarLinks}=require('./api/navigationFooter')

const port = 8080

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
  }));
  

app.get('/navbarLinks',(req,res)=>{
    res.send(navbarLinks);
})
   
app.listen(port, () => console.log(`Example app listening on port ${port}!`))