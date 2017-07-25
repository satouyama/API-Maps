module.exports = function(app){

  app.get('/listar',function(req,res){
    var connection = app.config.dbConnection();
    var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);

    cadastroDAO.listarUsuario(function(error,result){
         if(error){
              res.status(500).send({error : 'Cheque seu banco de dados'});
         }else{
          res.render('listar/listarUsuario',{ dados : result});
        }
    });


  });
}
