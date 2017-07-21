function cadastroDAO(connection) {
  this._connection =connection;
}

cadastroDAO.prototype.cadastrarPokemon = function(treinador,callback){
  this._connection.query("insert into treinador set ?",treinador,callback);
}

cadastroDAO.prototype.listarUsuario = function(callback){
  this._connection.query('select *from treinador',callback);
}

cadastroDAO.prototype.alterarTreinador = function([dados,id],callback){
  this._connection.query("UPDATE treinador set ? WHERE id = ? ",[dados,id],callback);
  console.log(dados);
}
cadastroDAO.prototype.deletarTreinador = function ([id],callback) {
   this._connection.query('delete from treinador where id = ?',[id],callback);
};
module.exports= function(){
  return cadastroDAO;
}
