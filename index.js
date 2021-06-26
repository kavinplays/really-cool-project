// install express with `npm install express` 
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('flol'))

// export 'app'
module.exports = app
