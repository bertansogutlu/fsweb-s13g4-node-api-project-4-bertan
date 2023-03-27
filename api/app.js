
const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');
const userModel = require('./user-model');
const app = express();
app.use(express.json());
app.use(middleware.logger);
app.use(cors());


app.get('/api/kullanicilar',(req,res,next)=>{
    res.json(userModel.getAllUsers());
});

app.post('/api/kayitol',middleware.checkSameUserName,middleware.validateNewUser, (req,res,next)=>{
    const user = req.body;
    const newUser = userModel.createNewUser(user);
    res.status(201).json(newUser);
});

app.post('/api/giris',middleware.isValidUser,(req,res,next)=>{
  res.status(201).json({message:'Hos geldiniz '+req.body.kullaniciAdi})
});

app.use((err,req,res,next)=>{
    let status = err.status || 500;
    res.status(status).json({
        customMessage: 'Bir hata olustu',
        message: err.message
    })
});

module.exports = app;