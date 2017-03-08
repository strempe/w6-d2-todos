// Libraries
let express = require('express')
let knex = require('knex')({client: 'pg', connection: process.env.DATABASE_URL})

let bodyParser = require('body-parser')
const PORT = 3000

// Create web server
let app = express()

// Add public static file support
app.use(express.static('public'))

// Parse application/json form post bodies
app.use(bodyParser.json())

// Routes
app.get('/todos', function(req, res){
  knex.select('*').from ('todos').then(function(data){
    res.json(data)
  }) 
})
   
// Your routes go here...

// Start the web server, listen for incoming web requests
app.listen(PORT, function () {
  console.log('Web server running at http://localhost:' + PORT)
})