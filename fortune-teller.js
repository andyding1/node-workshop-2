var fortune = require('./library/fortune.js');


if(process.argv[2] === undefined){
    console.log(fortune.getFortune());
}

else{
    var i = 0;
    while(i<process.argv[2]){
        console.log(fortune.getFortune());
        i++;
    }
}
