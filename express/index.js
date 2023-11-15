const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const port = 3000

app.use(session({
    secret:'un secret',
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge:5000}
}))

app.use('/static',express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// const logrequest = (req,res,next)=>{
//     console.log(req.originalUrl)
//     next()
// }

// app.use(logrequest)

app.get('/',(req,res)=>{
    console.log("session: ",req.session)
    
    if( !req.session.views){
        req.session.views = 0
    }
    req.session.views++
    let duree = req.session.cookie.maxAge
    res.send(`Hello vous avez visité la page ${req.session.views} fois, expire le : ${duree}`)
});

// app.get('/hello',logrequest,(req,res)=>{
//     
//     res.send(`Hello vous avez visité la page ${views} fois`)
// })

//chargement d'une page html
app.get('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
})

// route dynamique
app.get('/bonjour/:prenom/:nom',(req,res)=>{
    const param = req.params.nom+' '+req.params.prenom;
    res.send(`Bonjour ${param}`)

})

//dynamique avec des variables d'url
app.get('/welcome',(req,res)=>{
    const param = req.query.nom+' '+req.query.prenom;
    res.send(`welcome ${param}`)
})


app.post('/form',(req,res)=>{
    // res.send("Connexion réussie")
    console.log(req.body)
    // res.json(req.body)
    if(req.body.mdp == '1234'){
        res.send('Bienvenu à la CIA')
    }else{
        res.send('Mot de passe incorrect')
    }
})

// app.get('/ab?cd',(req,res)=>{
//     res.send('/ab?cd')
// })

// app.get('/ab*cd',(req,res)=>{
//     res.send('ab*cd')
// })

// page 404
app.use((req,res)=>{
    res.status(404).send('Page non trouvé ')
})

app.listen(port,()=>{
    console.log('server open in '+port)
})
