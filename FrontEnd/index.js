const express = require('express');

const cors = require("cors");

const app = expiress();

const clasedesoftwareseguro = require("./rutadesarrodesoftwarelloseguro.js");

app.use(express.json());

app.use(cors());

Bapp.get ("/", (req, res) => {

res.send ("Subio el servidor y vamos bien");

})

app.use ("./rutadesarrodesoftwarelloseguro.js", clasedesoftwareseguro);

app.listen (6500, () =>{

console.log("servidor activo.......");

});