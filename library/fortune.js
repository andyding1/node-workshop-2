function getFortune(){
    var quote1 = "The best preparation for tomorrow is doing your best today.";
    var quote2 = "Start by doing what's necessary; then do what's possible; and suddenly you are doing.";
    var quote3 = "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.";
    var quote4 = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.";
    var quote5 = "We must let go of the life we have planned, so as to accept the one that is waiting for us.";
    var quote6 = "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.";
    var quote7 = "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.";
    var quote8 = "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.";
    var quote9 = "There are two ways of spreading light: to be the candle or the mirror that reflects it.";
    var quote10 = "It is during our darkest moments that we must focus to see the light.";
    var fortunes = [quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10];
    return fortunes[Math.floor(Math.random()*fortunes.length)];
}

module.exports = {
    getFortune: getFortune
};