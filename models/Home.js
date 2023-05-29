const Sequelize = require('sequelize')
const db = require('./db')

const Home = db.define('homes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

//Criar a tabela no BD
Home.sync()

//Verificar se há alguma diferença na tabela, realiza a alteração
Home.sync({ alter: true })

module.exports = Home
