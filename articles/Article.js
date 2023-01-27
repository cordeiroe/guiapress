const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); //Cria a relação 1 categoria para N artigos (1-n)
Article.belongsTo(Category); //Cria a relação 1 artigo para 1 categoria (1-1)


module.exports = Article; 