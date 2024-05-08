function show(){
    togg.classList.toggle("hidden")
   
}
const textInput=document.querySelector(".textInput")
const mainText=document.querySelector(".mainText")
const secText=document.querySelector(".secText")
const button=document.querySelector(".startBtn")
const btn=document.querySelector(".secondBtn")
const displayText=document.querySelector(".displaytext")
function start(){
    textInput.classList.toggle("hidden")
    btn.classList.toggle("hidden")
    mainText.innerHTML="Enter Your Text Here"
}
function dis(){
        displayText.classList.toggle("hidden")
        const input=textInput.value
        displayText.textContent=input
        textInput.classList.toggle("hidden")
        secText.classList.toggle("hidden")
        googleElements.classList.toggle("hidden")
    }
