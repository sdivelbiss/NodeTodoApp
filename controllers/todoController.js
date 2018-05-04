let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let urlencodedParser = bodyParser.urlencoded({extended: false});

//Connect to mLab Database
mongoose.connect('mongodb://sdivelbiss:test@ds115360.mlab.com:15360/todoapp');

//Create a Schema
let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app){
    app.get('/todo', function(req, res){
        //Get data from MongoDB and pass it to the view
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        })
        
    });
    app.post('/todo', urlencodedParser, function(req, res){
        //Get data from the view and add it to mongoDB
        let newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data)
        })
    });
    app.delete('/todo/:item', function(req, res){
        //Delete the requested item from mongoDB
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data)
        })
    });
}
