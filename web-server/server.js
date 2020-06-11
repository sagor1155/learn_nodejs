const express = require('express');
const path  = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.post('/contact', function(req, res) {
    if(!req.body.name){
        return res.status(400).send('Name is required');
    }
    res.status(201).send(`Thank you ${req.body.name}`);
});

app.post('/login', function(req, res){
    if(!req.header('x-auth-token')){
        return res.status(401).send('No Token');
    }

    if(req.header('x-auth-token') != '123456'){
        return res.status(402).send('Not Authorized');
    }

    res.status(200).send('Logged in');
});

app.put('/post/:id', function(req, res){
    res.json(
        {
            id: req.params.id,
            title: req.body.title 
        }
    );
});

app.delete('/post/:id', function(req, res){
    res.json({msg: `post ${req.params.id} deleted`});
});

app.post('/orders', function(req, res){
    console.log('post request received');
    console.log(req.header('Content-Type'));
    // console.log(req.body);                    
    // res.status(200).json(req.body); 
    res.status(200).send(); 
});

var myData = 
[
    {
      "name": "Meowsy",
      "species" : "cat",
      "foods": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["ham", "zucchini"]
      }
    },
    {
      "name": "Barky",
      "species" : "dog",
      "foods": {
        "likes": ["bones", "carrots"],
        "dislikes": ["tuna"]
      }
    },
    {
      "name": "Purrpaws",
      "species" : "cat",
      "foods": {
        "likes": ["mice"],
        "dislikes": ["cookies"]
      }
    }
];

app.get('/orders', function(req, res){        
    console.log('get request received');  
    res.status(200).json(myData); 
});

app.listen(5000, () => console.log(`Server started on 5000`));
