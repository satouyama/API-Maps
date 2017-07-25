module.exports = function(app){

   app.get('/teste2/:idPokemon1/:idPokemon2',function(req,res,error){
      var idPokemon1 = req.params.idPokemon1;
      var idPokemon2 = req.params.idPokemon2;
      var connection = app.config.dbConnection();
      var cadastroDAO = new app.app.cadastroDAO.cadastroDAO(connection);
       console.log(idPokemon2,idPokemon1);



                    function randomUser() {


                     return Math.floor(Math.random() * (idPokemon1 - idPokemon2 + 1)) + idPokemon2;
                      var vencedor = ramdomUser();
                  }



              console.log("vencedor:" + randomUser());



   });
}
