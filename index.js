const express = require('express')

const app = express();
const cors = require('cors');
const  bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const users = ['rinthy', 'nousi','santona','anika','tinni'];
const pb = ['joni', 'moni','coni','koni', 'pun','toni',];
app.set('port', process.env.PORT || 3000);


app.get(('/user/:id'),(req,res)=>{
    const id =  req.params.id;
    const name = users[id];
    res.send({name,id})
});
app.get(('/public/:id'),(req,res)=>{
    const pid = req.params.id;
   const pname= pb[pid];
 
   res.send({pid,pname})
});
//post 
app.post('/addUser',(req,res)=>{
    //post data 
    const receiveData = req.body;
    receiveData.id = 45;
    res.send(receiveData)
})
app.listen(4000,()=>{
    console.log('starting your code....')
});
