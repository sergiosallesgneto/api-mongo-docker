const express = require("express");
const app = express();
const {MongoClient} = require("mongodb");


app.get("/alunos", (req, res )=> {
    const cliente = new  MongoClient("mongodb://192.168.100.100:27017");
    cliente.connect();
    cliente.db("Fatec").collection("Alunos").find()
    .toArray().then( (alunos) => {
        res.send(alunos)
    }    )
  
}) ;




app.listen(3000, () => {
    console.log("funfando...");
})