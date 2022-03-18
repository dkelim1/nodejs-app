var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.19.0.2",
  user: "mysqluser",
  password: "password",
  database: "messages",
  debug: false
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM messages", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

var http = require('http');


http.createServer( function( httpRequest, httpResponse ) {
    httpResponse.writeHead( 200, { 'Content-Type' : 'text/plain' } );
    httpResponse.write( '=== START httpResponse' + "\n" );


    httpResponse.write( 'Obtained: ' + JSON.stringify( result ) );
    sys.log( 'FROM DB: ' + JSON.stringify( result) );

        httpResponse.write( '=== Test' + "\n" );
        httpResponse.end();

        dbClient.end();

//    } );

} ).listen( 80 );

