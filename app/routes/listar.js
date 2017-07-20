module.exports = function(app){

  app.get('/listar',function(req,res){
    var connection = app.config.dbConnection();
    var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);
    cadastroDAO.listarUsuario(function(error,result){
          res.render('listar/listarUsuario',{ dados : result});
    });


  });
}
