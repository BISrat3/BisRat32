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
    displayScreen.innerHTML =""
    counter.innerHTML = "";
    player = [];
    simonChoice = [];
})


start.addEventListener('click', ()=> {
    // console.log("start clicked")
        displayScreen.innerHTML ="Start the Game"
        counter.innerHTML = "level 0";
        player = [];
        simonChoice = [];
        getSelectedColor()      
})

// function for selecting random color

function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * 4)]
    //  console.log(colorSelected)
    simonChoice.push(colorSelected)
    // console.log(simonChoice)
    highlightSequence()
}
// getSelectedColor()

function highlightSequence(){    
    simonChoice.forEach((colors, i) => {
// for(let i=0;i<=simonChoice.length;i++){
    // console.log(simonChoice[i])
    setTimeout(()=>{
        if (startGame = true){
            if(simonChoice[i] === arrayColors[0]){
                green.style.background = "green";
                console.log(simonChoice[i])
            }
            else if(simonChoice[i] === arrayColors[1]){
                red.style.background = "red";
                console.log(simonChoice[i])
            }
            else if (simonChoice[i] === arrayColors[2]){
                yellow.style.background = "yellow";
                console.log(simonChoice[i])
            }
            else if (simonChoice[i] === arrayColors[3]){
                blue.style.background = "blue";
                console.log(simonChoice[i])
            }
        else {
            
            displayScreen.innerText = "Click the right button to start the game"
        }
        }  
    }, 500 * i )
    })
}

