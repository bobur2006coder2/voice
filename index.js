let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.onclick = () => {
    let yetc = new SpeechSynthesisUtterance(inp.value)
    if (yetc.text=="") {
        yetc.text="inputni toldiring"
        speechSynthesis.speak(yetc)
    }else{
        speechSynthesis.speak(yetc)
    }


}
