function cadastroDAO(connection) {
  this._connection =connection;
}

cadastroDAO.prototype.cadastrarPokemon = function(treinador,callback){
  this._connection.query("insert into treinador set ?",treinador,callback);
}

cadastroDAO.prototype.listarUsuario = function(callback){
  this._connection.query('select *from treinador',callback);
}


module.exports= function(){
  return cadastroDAO;
}
