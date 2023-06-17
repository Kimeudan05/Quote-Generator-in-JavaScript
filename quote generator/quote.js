let btn =document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let author=document.querySelector('.author');

const quotes=[
    {
        quote:"Be yourself; everyone else is already taken.",
        author:" - Oscar Wilde",
    },
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author:" - Winston Churchill",
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:" - Nelson Mandela",
    },
    {
        quote:"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author:" - Ralph Waldo Emerson",
    },
    {
        quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." ,
        author:"- Helen Keller",
    },
    {
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant."  ,
        author:"- Robert Louis Stevenson",
    },
    {
        quote:"The only limit to our realization of tomorrow will be our doubts of today.",
        author:"  - Franklin D. Roosevelt",
    },
    {
        quote:"The best way to predict the future is to create it." ,
        author:" - Peter Drucker",
    },
    {
        quote:"The only way to do great work is to love what you do." ,
        author:"- Steve Jobs",
    },
    {
        quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author:"  - Albert Schweitzer",
    },
];

btn.addEventListener('click', function(){
let random= Math.floor(Math.random()* quotes.length);
quote.innerText =quotes[random].quote;
author.innerText = quotes[random].author;
});