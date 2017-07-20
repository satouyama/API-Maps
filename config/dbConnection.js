var mysql = require('mysql');

var connMysql = function(){
  return mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'DesafioPokemon'
  });
}
module.exports = function(){
 return connMysql;
 console.log('banco rodando');

}
