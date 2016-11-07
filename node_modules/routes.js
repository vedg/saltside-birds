//Instaniate restify NPM Module
var restify = require('restify');

//Instaniate the Bird controller Objects 
var BirdManager = require('./controllers/BirdManager.js').getInstance();

// Defining Route Path
var PathManager = (function () {
    return {
        getBase: function () {
            return "/api";
        },
        getVersion: function () {
            return "v1";
        },
        getBasePath: function () {
            return this.getBase() + "/" + this.getVersion();
        },
        getBirdPath: function () {
            return this.getBasePath() + '/birds';
        }

    }
})();


var Routes = function (server) {

     //route to get all birds information
    server.get(PathManager.getBirdPath(), BirdManager.getbirds);

     //route to get bird information by its ID
    server.get(PathManager.getBirdPath() + '/:id', BirdManager.getbirdbyid);

    //route to create new bird
    server.post(PathManager.getBirdPath(), BirdManager.createbird);

     //route to delete bird information by its ID
    server.del(PathManager.getBirdPath() + '/:id', BirdManager.deletebird);

}




 // Exposing Routes instance Object to Global Scope
module.exports.route = function(server) {
 return new Routes(server);
};
