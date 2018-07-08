var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'nodejs'});
// Read users and print to console
   function callback() {
	   var query = "SELECT name, age, city,address FROM users where id='2'";
	   console.log(query);
	   
       client.execute(query, function (err, result) {
           if (!err){
               if ( result.rows.length > 0 ) {
				   var totalrows = result.rows.length;
				   for(var i=0;i<totalrows;i++){
					    var user = result.rows[i];
					   console.log(user);
					   
				   }
                  
                   
               } else {
                   console.log("No results");
               }
           } else{
			 console.log(err);  
		   }
 
           // Run next function in series
           //callback(err, null);
       });
   }
   callback();
