let express = require('express');
let todoController = require('./controllers/todoController');
let app = express();

//set up template engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('./public'));

//Fire controllers
todoController(app)

//Listen to port
app.listen('3000');
console.log('You are listening to port 3000')