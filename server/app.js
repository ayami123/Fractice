var Sequelize = require('sequelize');

var connection = new Sequelize('postgre','postgre','asakura123',
    {
    dialect: 'postgres',
    }
);

var Article = connection.define('article',{
    title: Sequelize.STRING,
    body: Sequelize.TEXT
})

connection.sync().then(()=>{
        Article.create({
             title: 'demo title',
             body: 'hey man lalalalalala'
         },(error)=>{console.log("error")})
     });