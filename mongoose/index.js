const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const etudiantRoutes = require('./router/etudiant.router')
const departementRoutes = require('./router/departement.router')
const port = 3000


const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/testjs')
  .then(() => console.log('Connected!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))



app.use('/etudiants',etudiantRoutes)
app.use('/departement',departementRoutes)


app.use((req,res)=>{
    res.status(404).send('page non trouvé')
})


app.listen(port,()=>{
    console.log("app launched on port :"+port)
})

