const quotes = [
    {
        quote: "집가고싶다",
        author:" 원윤성",
    },
    {
        quote: "김재서 ♥ 김하님",
        author:" 손민준",
    },
    {
        quote: "최선을 다하자",
        author:" 최미나 선생님",
    },
    {
        quote: "안유진 사랑해",
        author:" 유승우",
    },
    {
        quote: "하님이 인생의 동반자 손민준",
        author:" 김재서",
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;