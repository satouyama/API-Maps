module.exports = function(app){
  app.get('/pokemon/:id',function(req,res){
           var id = req.params.id;
           var connection = app.config.dbConnection();
           var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);


               cadastroDAO.Testarteste([id],function(error,result){
                 var nome = result[0].treinador;
                  console.log(nome);
                 res.render('teste',{ nome });
               });

  });
}
