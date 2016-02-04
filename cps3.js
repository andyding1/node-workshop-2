//It's kind of like using a function as a return in asynchronous code
function firstChar(word,func){
    
    function returnFirstChar(){
        func(word[0]);
    }
    
    setTimeout(returnFirstChar, 1000);
}

firstChar('javascript', function(result){
    console.log(result);
});

function lastChar(word,func){
    
    function returnLastChar(){
        func(word[word.length-1]);
    }
    
    setTimeout(returnLastChar, 1000);
}

lastChar('javascript', function(result){
    console.log(result);
});

function getFirstandLastChar(word, callback){
    firstChar(word, function(firstLetter){
        lastChar(word, function(lastLetter){
            callback(firstLetter+lastLetter);
       });
    });
}

getFirstandLastChar('javascript',function(result){
    console.log(result);
});