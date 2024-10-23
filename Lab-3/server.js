const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const productRoutes = require('./routes/productRoutes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//body parser  => key component in APIs nodejs 
// will help you to pass the data in body
app.use(bodyParser.json())

//routes
app.use('/api/products', productRoutes)

//es6 => promise aceepted rejected

mongoose.connect('mongodb+srv://admin:sTyUeXk5g5tUG0l0@akshay.ws3kz.mongodb.net/?retryWrites=true&w=majority&appName=Akshay')
.then(() => console.log("Mongo db is connected succesfully"))
//.catch(() => console.log("There is problem in connected with database"))
.catch( err => console.log(err))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})