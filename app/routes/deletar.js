module.exports = function(app){

 app.get('/deletar/:id',function(req,res){
       var id = req.params.id;
       var connection = app.config.dbConnection();
       var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);

        cadastroDAO.deletarTreinador([id],function(error,result){
              if(error){

              }else{
                res.redirect('/listar');
              }
        });
 });

}
