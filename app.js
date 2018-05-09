let express = require('express');
let todoController = require('./controllers/todoController');
let app = express();
const PORT = process.env.PORT || 5000

//set up template engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('./public'));

//Fire controllers
todoController(app)

//Listen to port
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
