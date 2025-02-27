require ("dotenv").config(); //carrega as vaiaveis colocadas no arquivo .env
const index= require ('./index')
const port = process.env.PORT;

const express = require("express");
const app = express();

app.get ("/usuario", async (req, res) => {
    const clientes = await index.selectCustomers
    res.json(clientes)
})

app.get("/", (req, res) => {
  res.json({
    message:"Funcionando"
  })
})

app.listen(port);
console.log("Backend rodando")