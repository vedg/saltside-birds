
// mongoose NPM Module
var mongoose=require('mongoose');

//bird model
var Bird = require('../models/birdmodel.js');

// Create Constructor
var BirdManager = function() {};

/**
 * @parameters : None
 * Description : Get all bird records from database
 * GET: Birds
 * Host: localhost
 * Content-Type:String  
 **/
BirdManager.prototype.getbirds = function (req, res, next) {

   Bird.find({}, function (error, birdinfo) {
            res.send(birdinfo);
        });
   
}

/**
* @parameters : id,name,family,continents,
* Description: Create Bird by getting all parameters
* POST: Birds
* Host: localhost
* Content-Type:String  
*/
BirdManager.prototype.createbird = function (req, res, next) {

    var requestbodyObj = req.body;
    var now = new Date();
    var birdObj = new Bird();
    birdObj.added = now.toUTCString();
    if ('visible' in requestbodyObj){
        birdObj.visible = true;
    }else{
        birdObj.visible = false;
    }   
    for (key in requestbodyObj) {
	birdObj[key] = requestbodyObj[key];
    }
    try {
        //Save birdObj into MongoDB
        birdObj.save(function (err) {
            if (!err) {
                console.log('Bird saved into database!');
            }
            else {
              console.log(err);
            }

        });
    }
    catch (error) {
        logger.warn(error);

        logger.info(JSON.stringify(err));
        return next();
    }
    res.send();
}

/**
* @parameters : id,
* descripion: Delete Bird Record by passing ID
* POST: Birds
* Host: localhost
* Content-Type:String  
*/
BirdManager.prototype.deletebird = function (req, res, next) {

   var birdid = req.params.id;

  //get bird by its ID and remove from the database
  Bird.remove({id:birdid}, function (error, birdinfo) {
            res.send(birdinfo);
        });
}

/**
* @parameters : id,
* descripion: Get Bird Record by passing ID
* GET: Birds
* Host: localhost
* Content-Type:String  
*/
BirdManager.prototype.getbirdbyid = function (req, res, next) {

   var birdid = req.params.id;

  //We can use either find  or findById
  Bird.find({id:birdid}, function (error, birdinfo) {
            res.send(birdinfo);
        });
}

//make this module available for global scope
module.exports.getInstance = function() {
 return new BirdManager();
};

