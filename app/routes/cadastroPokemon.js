module.exports = function(app){

  app.get('/cadastroPokemon',function(req,res){
      res.render('cadastro/cadastroPokemon');
  });

 app.post('/pokemons',function(req,res){
     var connection = app.config.dbConnection();
     var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);

     var treinador = {
        treinador: req.body.treinador,
        tipo : req.body.tipo,
        nivel : 1
         }

         if(req.body.tipo === "pikachu" | req.body.tipo ==="charizard" | req.body.tipo ==="mewtwo" ){

           cadastroDAO.cadastrarPokemon(treinador,function(error,result){
              if(error){
                console.log(error);
              }else{
                  res.redirect('/');
              }
          });

        } else{
          console.log('ESSE NÃO PODE, DESCULPE!!!!!');
        }

   console.log(treinador);



 });
}
