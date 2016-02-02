//CPS function to return first character of a string
function firstChar(string, func){
    func(string[0]);
}

firstChar("asdf",function(firstLetter){
    console.log(firstLetter);
});

//CPS function to return last character of a string
function lastChar(string, func){
    func(string[string.length-1]);
}

lastChar("asdf", function(lastLetter){
    console.log(lastLetter);
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
    console.log(newStr);
});