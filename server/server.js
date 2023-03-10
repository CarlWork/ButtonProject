const express = require('express')
const cors = require('cors')
const path = require('path')
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '6fc82eb995c5494a84576e98588c42f9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
    rollbar.log('site visited')
})
app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/style.css'))
})
app.get('/js', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))

})
// app.get('/', (req, res) => {
//     res.status(200)
// })

app.listen(4000, console.log('App Running on 4000'))








// app.get('/', (req, res) => {
//     try {
//         nonExistentFunction()
//     } catch (error) {
//         rollbar.error(error)
//     }
// })