const routerApi = require('./routes')
const express = require('express')
const app = express()
const { config } = require('./config/index')
const {checkApiKey} = require('./middleware/auth.handler')
const passport = require('passport')
const bodyParser = require('body-parser')

app.use('/public', express.static(`${__dirname}/public/imgs`))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(passport.initialize())
const port = config.port

const mongoose = require('mongoose')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

console.log('*************************')
console.log(MONGO_URI)
mongoose.connect(MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=> console.log('Ya estamos conectados a THE HIVE')).catch(e=>console.log(e))


require('./util/auth')

routerApi(app)



app.get('/otra-ruta', checkApiKey, (req, res) => {
  res.send('Hi! This is other route')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
