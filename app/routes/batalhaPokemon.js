module.exports = function(app){
app.post('/batalhaPokemon',function(req,res){
      var connection = app.config.dbConnection();
      var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);
      var idPokemonA = req.body.pokemonIdA;
      var idPokemonB = req.body.pokemonIdB;
      cadastroDAO.PokemonBatalha([idPokemonA,idPokemonB],function(error,rows){
              var nivel1 = rows[0].nivel;
              var nivel2 = rows[1].nivel;

                if(nivel1 > nivel2){
                 var maiorNivel = nivel1;
                 var menorNivel = nivel2;
                var b = maiorNivel - menorNivel;

               console.log(b);
                 }

                 if(nivel1 = nivel2){
                  //níveis iguais
               }


               if(nivel1 < nivel2){
                 var menorNivel = nivel2;
                 var menorNivel = nivel1;
               }

              });







});

}
