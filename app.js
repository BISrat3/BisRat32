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
    startGame = false;
})

start.addEventListener('click', ()=> {
    // console.log("start clicked")
        displayScreen.innerHTML ="Start the Game"
        // counter.innerHTML = "level 0";
        player = [];
        getSelectedColor();
        levelDisplay();
   
})

// level screen display 
function levelDisplay(){
    level = Math.min(level +=1);
    if(level < 19){
        counter.innerHTML = "Level - " + level; 
    }
    else if (level <= 20){
        counter.innerHTML= "Final level"
    }
        return;
}

// function for selecting random color
function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * arrayColors.length)]
    //  console.log(colorSelected)
    simonChoice.push(colorSelected)
    // console.log(simonChoice)
    simonSelections()
}
// getSelectedColor()

// function of simon selection
function simonSelections(){    
    simonChoice.forEach((colorSelected, i) => {
    setTimeout(()=>{
        if (startGame = true){
            if(simonChoice[i] === arrayColors[0]){
                green.style.background = "green";
                // console.log(simonChoice[i])
                setTimeout(()=>
                {
                green.style.background = "springgreen"
                } ,200)
            }
            if(simonChoice[i] === arrayColors[1]){
                red.style.background = "red";
                // console.log(simonChoice[i])
                setTimeout(()=>
                {
                    red.style.background = "tomato"
                } ,200)
            }
            if (simonChoice[i] === arrayColors[2]){
                yellow.style.background = "yellow";
                //  console.log(simonChoice[i])
                setTimeout(()=>
                {
                    yellow.style.backgroundColor  = "lightyellow"
                } ,200)
            }
            if (simonChoice[i] === arrayColors[3]){
                blue.style.background = "blue";
                console.log(simonChoice[i])
                setTimeout(()=>
                {
                    blue.style.backgroundColor = "lightskyblue"
                } ,200)
            }
        }  
    }, 500 * i)
    })
}

// // player vs simon selection 
// function playerSelection(){
//     if(player[] === arrayColors[] && player[] === simonChoice[]){

//     }
// }