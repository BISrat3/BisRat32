// Defining variables/ declaring valriables
let player = [];
let simonChoice = [];
const arrayColors = ['green','red','yellow','blue'];

let winner;
let level =0;
let startGame = true;

const green = document.querySelector('.greenBtn')
// console.log(green)
const red = document.querySelector('.redBtn')
// console.log(red)
const start = document.querySelector('.startBtn')
// console.log(start)
const yellow = document.querySelector('.yellowBtn')
// console.log(yellow)
const blue = document.querySelector('.blueBtn')
// console.log(blue)
const reset = document.querySelector('.resetBtn')
// console.log(reset)
const displayScreen= document.querySelector("#screenInput")

const counter= document.querySelector("#inputCounter")

// adding eventListener for each button

green.addEventListener('click', ()=> {
    // console.log("green clicked")
    
})
red.addEventListener('click', ()=> {
    // console.log("red clicked")
})
blue.addEventListener('click', ()=> {
    // console.log("blue clicked")
})
yellow.addEventListener('click', ()=> {
    // console.log("yellow clicked")
})

reset.addEventListener('click', ()=> {
    // console.log("reset clicked")
})

start.addEventListener('click', ()=> {
    // console.log("start clicked")
        displayScreen.innerHTML ="Lets start the Game"
        counter.innerHTML.level = ""
        getSelectedColor()
        

})
function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * 4)]
    // console.log(colorSelected)
    simonChoice.push(colorSelected)
    // console.log(simonChoice)
    highlightSequence()
}
// getSelectedColor()
function highlightSequence(){
    
    simonChoice.forEach(choice, i)
    for(let i=0;i<=simonChoice.length;i++){
        console.log(simonChoice[i])
        setTimeout(function (){

        }, 500 )
    }
}
