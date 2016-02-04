// Create a file called cps.js where all your code will be
// Create a function called firstChar that takes a string and "returns" the first character of the string after one second.
// NOTE: You won't be allowed to use the return keyword, because you'll only be "returning" in the callback to setTimeout, way after your function has finished executing.
// Create a function called lastChar that takes a string and "returns" the last character of the string after one second.
// Create a function called getFirstAndLast that takes a string and "returns" the first+last character of the string. Your function should use firstChar and lastChar to do its work.

//CPS function to return first character of a string
function firstChar(string, func){
    func(string[0]);
}

firstChar("asdf", function(firstLetter){
    setTimeout(function(){
       console.log(firstLetter); 
    }, 1000);
});

//CPS function to return last character of a string
function lastChar(string, func){
    func(string[string.length-1]);
}

lastChar("asdf", function(lastLetter){
    setTimeout(function(){
       console.log(lastLetter); 
    }, 1000);
});

//Create a function that takes a string and a continuation (callback) to use two previous functions to return a string that contains both the first and last character of the initial string
function getFirstAndLast(string, callback){
    firstChar(string,function(firstLetter){
        lastChar(string,function(lastLetter){
            callback(firstLetter.concat(lastLetter));  
        });
    });
}

getFirstAndLast("hello",function(newStr){
    setTimeout(function(){
       console.log(newStr); 
    }, 1000);
});