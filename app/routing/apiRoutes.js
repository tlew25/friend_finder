// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friends = require("../data/friends");
var path = require("path");




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    console.log("FriendFinder API Loading...");
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res, body) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    console.log("POSTING DATA...");

    // variables for adding new friend to database server 
    var newFriend = req.body;
    var newPoints = newFriend.scores; 
    var total = 0;
    var friendMatch = 1000; // set value to big number
    var friendName = "";
    var friendPic = "";
    //  

    // use a for loop to shuffle through friends data array in module exports
    for( var i = 0; i < friends.length; i++){
      //
      total = 0;

      // create second for loop for calculation of intScore of new friend to actual data stored in array
      for( var t = 0; t < newPoints.length; t++){
        var totalDifference = Math.abs(newPoints[t] - friends[i].scores[t]);
        total += totalDifference;
      }
      if(total < friendMatch){
        friendMatch = total;
        console.log("Best Match =", friends[i]);
        console.log("Best Match =", friends[i]);
        console.log("Best Match =", friends[i]);

        friendMatch = total;
        friendName = friends[i].name;
        friendPic = friends[i].photo;
    
      }
    }
    friends.push(newFriend);
    res.json({status: "OK", name: friendName, photo: friendPic});
  })
    

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = [];
    res.json({ ok: true });
  })
}
