const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Ruzbellit!')
})


app.get('/david', (req, res)=>{
  res.send('Hola Soy David uwu')
  })


  app.get('/seba', (req, res)=>{
    res.send('Hola Soy seba')
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
