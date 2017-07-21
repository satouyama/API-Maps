module.exports = function(app){
   app.get('/alterar/:id',function(req,res){
     var user_id = req.params.id;
        res.render('alterar/alterar',{user_id});
   });


      app.post('/alterar/:id',function(req,res){
         var id = req.params.id;
        var dados ={

                treinador : req.body.treinador

        }

         var connection = app.config.dbConnection();
         var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);

         cadastroDAO.alterarTreinador([dados,id],function(error,result){
            if(error){
              console.log(error);
            }else{
              res.redirect('/');
            }
         });
      });

}
