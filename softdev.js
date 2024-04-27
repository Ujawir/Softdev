const express = require('express')
const send = require('send')
const app = express()
let users = []



app.use(express.json())
// get, post, delete, put
// body-parser
app.get('/',(req,res)=>{
    res.send(users)
})
app.post('/',(req,res)=>{
    const datas = req.body
    users = [...users,datas]
    res.send('user telah dibuat')
})
app.delete('/:name',(req,res)=>{
    const params = req.params.name
    let deleteUser = users.filter(val => val.name!==params)
    users = deleteUser
    res.send(users)
})
app.put('/',(req,res)=>{
    const datas = req.body
    users.map(val =>{
        if(val.nrp===datas.nrp) val.name= datas.name
    })
    res.send(users)
})
app.listen(4000,()=>{
    console.log('4000 adalah di mana port ini berjalan')
})