const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const User = require('./model')



app.use(express.json())
app.use(cors({
    origin:'*'
}))




app.post('/',async (req, res)=>{
    const user = await User.create(req.body)
    console.log(user)
    res.send('good')
})

app.listen(port, ()=>{
    console.log('server running')
})