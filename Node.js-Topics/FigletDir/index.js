const figlet = require('figlet');
var giveMeAJoke = require('give-me-a-joke');

// it give us figlet way  
// _
// | | ___   _ ___ _   _ _ __ ___
// | |/ / | | / __| | | | '_ ` _ \
// |   <| |_| \__ \ |_| | | | | | |
// |_|\_\\__,_|___/\__,_|_| |_| |_|

figlet("kusum", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//it give us random joke like What is the tallest building in the world? The library – it’s got the most stories!
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});