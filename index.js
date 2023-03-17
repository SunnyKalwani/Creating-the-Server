const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());

app.get('/', function(req,res){
    res.send('Hello World!');
})

app.listen(3000, function(){
    console.log('Server running on Port 3000...');
});