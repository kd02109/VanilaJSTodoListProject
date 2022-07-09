const quotes = [
    {
        quote: "'할 수 없다'라고 생각하는 동한은 '하기 싫다'라고 다짐하는 것이다. 그러므고 실행되지 않는다.",
        author: "스피노자",
    },
    {
        quote: "세상에서 가장 파괴적인 단어는 '나중'이고, 가장 생산적인 단어는 '지금'이다.",
        author: "이민규"
    },
    {
        quote: "당신이 원하는 모든 것들은 바로 두려움이라는 강 건너편에 있다.",
        author: "조지 에드에어",
    },
    {
        quote: "자신을 믿는 순간 어떻게 살아갈지 알게 된다.",
        author: "괴테",
    },
    {
        quote: "좋았다면 그것은 추억이고 나빴다면 그것은 경험이다.",
        author: "캐롤 터킹턴",
    },
    {
        quote: "절망감을 느끼지 않는 가장 좋은 방법은 일어나서 무언가를 하는 것이다.",
        author: "버락 오바마",
    },
    {
        quote: "어떤 분야에서든 성공을 위한 최소한의 요구조건이 있다면, 그것은 바로 지속적인 학습이다.",
        author: "데니스 웨이틀리",
    },
    {
        quote: "뜻이 확실하면, 반드시 생각하는 대로 이루어진다.",
        author: "프랑크 캔슬러스",
    },
    {
        quote: "하고 싶은 일을 한다면, 그 사람은 성공한 것이다.",
        author: "밥 딜런",
    },
    {
        quote: "앞으로 나아가는 비결은 일단 시작하는 것이다.",
        author: "마크 트웨인",
    },
];

const quote = document.querySelector("#quote span:first-child");
const quote2 = document.querySelector("#quote span:last-child");
const random = Math.floor(Math.random()*quotes.length);

//Math.round반올림 Math.ceil올림 Math.floor버림h
//Math.random -- 0~1 사이의 값을 반환
quote.innerText = quotes[random].quote;
quote2.innerText = quotes[random].author;