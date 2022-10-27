const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorText = document.querySelector(".author");

function  rquote (){
     fetch("https://api.quotable.io/random").then(res=> res.json()).then(result =>{
        console.log(result);

        quoteText.innerText = result.content
        authorText.innerText ="~" + result.author + "~"
    })
}
function t(){
    console.log("dziala");
}

quoteBtn.addEventListener("click", rquote);