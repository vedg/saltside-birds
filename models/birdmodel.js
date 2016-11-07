//Schema
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
 
var BirdSchema = new Schema({
  "id":{
      "type":"number",
      "description":"Provide ID of bird manually"
  },
  "name": {
    "type": "string",
    "description": "English bird name"
  },
  "family": {
    "type": "string",
    "description": "Latin bird family name"
  },
  "continents": {
    "type": "array",
    "description": "Continents the bird exist on",
    "minItems": 1,
    "items": { "type": "string" },
    "uniqueItems": true
  },
  "added": {
  "type": "string",
  "description": "Date the bird was added to the registry. Format YYYY-MM-DD"
  },
  "visible": {
  "type": "boolean",
  "description": "Determines if the bird should be visible in lists"
  }
});

module.exports=mongoose.model("birds", BirdSchema);


















































/*var mongoose=require('mongoose');
var Schema = mongoose.Schema;
 
var BirdSchema = new Schema({
   title: String,
  description: String,  
  additionalProperties: Boolean,
  properties: {
    name: String,
    family: String,
    continents:[ {      
      description: String,
      minItems: Number,
      items: String,
      uniqueItems: Boolean
    }],
    added: String,
    visible:String
  }
});

module.exports=mongoose.model("birds", BirdSchema);*/