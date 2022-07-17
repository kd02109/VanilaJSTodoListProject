const google = document.querySelector("#js-google");
const googleBtn = document.querySelector(".google-search button");
const naver = document.querySelector("#js-naver");
const naverBtn = document.querySelector(".naver-search button");


function googleSend(){
    const googleSearch = google.value;
    const url = "https://www.google.com/search?q="+googleSearch;
    console.log(googleSearch,url);
    window.open(url);
}

function naverSend(){
    const naverSearch = naver.value;
    const url ="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+naverSearch;
    window.open(url);
}


googleBtn.addEventListener("click",googleSend);
naverBtn.addEventListener("click",naverSend);