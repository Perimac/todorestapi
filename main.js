require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controller/todocontroller');

const server = express();



server.listen(process.env.SERVER_PORT, function(){
    console.log('server running...');
    mongoose.connect(process.env.ATLAS_DB)
    .then(function(){
        console.log('ATLAS DB RUNNING...');
        server.use(express.json());

        //APIS AND END-POINTS
        server.post('/atodo',controller.addTodo);
        server.get('/gtodo',controller.getTodo);
        server.put('/utodo/:id',controller.updateTodo);
        server.delete('/dtodo/:id',controller.deleteTodo);
    })
    .catch(function(error){
        console.log(error.message);
    });
});