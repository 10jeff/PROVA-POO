const express = require('express')
const path = require('path')

const app = express()

const Home = require('./models/Home')

app.use(express.json())




app.get('/', async (req, res) => {
  await Home.findOne()
    .then((datahome) => {
      return res.json({
        erro: false,
        datahome,
        url: 'http://localhost:8080/files/home/',
      })
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Nenhum valor encontrado para a página home!',
      })
    })
})

app.post('/cadastrar', async (req, res) => {
  await Home.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: 'Dados para página home cadastrado com sucesso!',
      })
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Dados para página home não cadastrado com sucesso!',
      })
    })
})

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080: http://localhost:8080')
})
