const quotes = [
    {
        quote: "오늘은 주말이니까 조금 설렁설렁 하자~",
        author: "주말의 나",
    },
    {
        quote: "오늘은 지영이 보는 날! 이쁘게 하고 가야지~",
        author: "데이트 날의 나",
    },
    {
        quote: "아 공부하기 싫다.",
        author: "공부중인 나",
    },
    {
        quote: "아 공부해야하는데.....",
        author: "공부하다가 관둔 나",
    },
    {
        quote: "아... ㄴㅜㄴㅇㅣ ㄱㅏㅁㄱㅕ...",
        author: "밥먹고 컴퓨터 앞에 앉은 나",
    },
    {
        quote: "배가 고픈건지.. 안고픈건지.. 밥먹으러 갈까...",
        author: "공부하기 싫어서 밥 고민하는 나",
    },
    {
        quote: "역시 이불속은 부들부들하고 따땃하다...",
        author: "잠에 들기전 이불을 극찬하는 나",
    },
    {
        quote: "이불속이 따뜻하고 좋은데...",
        author: "아침에 일어나서 클러스터를 가야하는 나",
    },
    {
        quote: "그래도 열심히 해보자구!",
        author: "매일 다짐하는 나",
    },
    {
        quote: "내가 머리는 있어 안할뿐이지",
        author: "자화자찬하는 나",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const today = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = today.quote;
author.innerText = today.author;