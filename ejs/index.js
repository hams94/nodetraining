const express = require('express')
const app = express()
const port = 3000

const etudiants = [
    { 'nom': "Hamidou" , "age":35},
    { 'nom': "Lama" , "age":26},
    { 'nom': "Oumou" , "age":22},
]

app.set('view engine', 'ejs')

app.use('static', express.static('public'))

app.get('/home/', (req, res) => {
    res.render('home')
})

app.get('/students',(req,res)=> {
    const data = {
        students: etudiants,
    }
    res.render('pages/students',data)
})
app.get('/teachers',(req,res)=> {
   
    res.render('pages/teachers')
})
app.get('/contact',(req,res)=> {
    res.render('pages/contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})