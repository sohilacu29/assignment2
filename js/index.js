


var quote= document.getElementById("quote");
var author= document.getElementById("author");
var quotes=[
    {
        quote:"Do one thing every day that scares you.",
        author:"― Eleanor Roosevelt"
    },
    {
        quote:"We are what we pretend to be, so we must be careful about what we pretend to be",
        author:"― Kurt Vonnegut, Mother Night"
    },
    {
        quote:"Sometimes you wake up, Sometimes the fall kills you And sometimes when you fall, you fly",
        author:"― Neil Gaiman"
    },
    {
        quote:"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
        author:"― Maya Angelou"
    },
    {
        quote:"The flower that blooms in adversity is the rarest and most beautiful of all.",
        author:"― Walt Disney Company, Mulan"
    },
    {
        quote:"Life is too short to waste your time on people who don’t respect,appreciate,and value you.",
        author:"― Roy T. Bennett"
    },
    {
        quote:"Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy",
        author:"― Roy T. Bennett"
    },
]
function appearQuote(){
    var random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    
    
}