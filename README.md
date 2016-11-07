-- Used NodeJS, Restify npm to expose REST APIs
-- Used mongoose as a ORM to communicate with MongoDB database

 >> Prerequisites 

	1.Install NodeJS
		with dependencies
		{"dependencies": {
		     "restify": "*",
			"mongoose":"*",
			"require":"*",
			"mongoose-schema-extend":"*",
		   "log4js":"*"
		}}
	2.Install MongoDB ad create new "Birds" database with "birds" collection

Steps to run:

1. run command use npm install to install all dependencies

2. $ node app.js

Server will start and listen on port 8080. 

 Tested all the APIs using REST Client plugin.

 new bird record has "id:IntegerValue" as follows.

 {
  "family" : "testFamily",
    "name" : "testBird",
    "id" : 1,
    "continents" : [ 
        "testContent1",
        "testContent2",
        "testContent3"
    ]

}

Adding test cases - 7th Nov,2016


