// ------- declaring valriable ---------//
let player = [];
let simonChoice = [];
const arrayColors = ['green','red','yellow','blue'];
let winner;
let level =0;
let startGame = false;

// ------- query selection elements ---------//
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

//--- adding eventListener for each button ---------//
green.addEventListener('click', ()=> {
    // console.log("green clicked")
    startGame = true;
    green.style.backgroundColor = "green";
    player.push('green')
    setTimeout(()=>
    {
        green.style.backgroundColor = "springgreen"
    } ,200)
    console.log(player)
    // playerSelection()
})
red.addEventListener('click', ()=> {
    // console.log("red clicked")
    startGame = true;
    red.style.backgroundColor = "red";
    player.push('red')
    setTimeout(()=>
    {
        red.style.backgroundColor = "tomato"
    } ,100)
    console.log(player)
    // playerSelection()
})
blue.addEventListener('click', ()=> {
    // console.log("blue clicked")
    startGame = true;
    blue.style.backgroundColor = "blue";
    player.push('blue')
    setTimeout(()=>
    {
        blue.style.backgroundColor  = "lightskyblue"
    } ,100)
    console.log(player)
    // playerSelection()
   
})
yellow.addEventListener('click', ()=> {
    // console.log("yellow clicked")
    startGame = true;
    yellow.style.backgroundColor = "yellow";
    player.push('yellow')
    setTimeout(()=>
    {
        yellow.style.backgroundColor = "lightyellow"
    } ,200)
    console.log(player)
    // playerSelection()
})

//--- Reset button functionality    ---------//
reset.addEventListener('click', ()=> {
    // console.log("reset clicked")
    startGame = false;
    displayScreen.innerHTML =""
    counter.innerHTML = "";
    player = [];
    simonChoice = [];
    displayScreen.innerHTML ="Press Start Button to begin the Game"
    start.style.background = "black";
    start.style.color = "cornflowerblue";
})

//--- Start button functionality  ---------//
start.addEventListener('click', ()=> {
    // console.log("start clicked")
    if( startGame = true){
        displayScreen.innerHTML ="Start the Game"
        // counter.innerHTML = "level 0";
        start.style.background ="green"
        start.style.color ="white"
        player = [];
        levelDisplay();
        getSelectedColor();
    }  
        // playerSelection()   
})




// --------------- Game Over Function --------------------//
function gameOver(){
    counter.innerHTML =""
    displayScreen.innerHTML ="Game Over"
    startGame = false;
}
// --------------- Function for selecting random color--------------------//
function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * arrayColors.length)]
    // simonChoice.push(colorSelected)
    // console.log(colorSelected)
    if(level<=16){
        simonChoice.push(colorSelected)
    }
    else{
        simonChoice.pop(colorSelected)
    }
    playerSelection()
    console.log(simonChoice)
    simonSelections()
}
// getSelectedColor()

// --------------- function of simon selection--------------------//
function simonSelections(){    
    
    simonChoice.forEach((colorSelected, i) => {
        setTimeout(()=>{
            if (startGame === true){
                if(simonChoice[i] === arrayColors[0]){
                    green.style.backgroundColor = "green";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        green.style.backgroundColor = "springgreen"
                    } ,200)
                }
                else if(simonChoice[i] === arrayColors[1]){
                    red.style.backgroundColor = "red";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        red.style.backgroundColor = "tomato"
                    } ,200)
                }
                else if (simonChoice[i] === arrayColors[2]){
                    yellow.style.backgroundColor = "yellow";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        yellow.style.backgroundColor  = "lightyellow"
                    } ,200)
                }
                else if (simonChoice[i] === arrayColors[3]){
                    blue.style.backgroundColor = "blue";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        blue.style.backgroundColor = "lightskyblue"
                    } ,200)
                }
            }  
        }, 500 * i)
    })
}

 // // // --------- player vs simon function comparsion-------------------//

function playerSelection(){
    if(startGame === true){
        if(player.length === simonChoice.length){
            if(player.every((value, i) => value === simonChoice[i]))
            displayScreen.innerHTML ="Proceed to the next level"
            console.log("Correct")
        }
        else{
             console.log("Wrong click")
        }
    }
   
    // simonSelections()
}
// --------------- Level of the game --------------------//
function levelDisplay(){
    // level = Math.min(level +=1);
    if (startGame === true){
            level ++;
           if(level <=15){
                counter.innerHTML = "Level - " + level; 
            }
           else if (level <= 16){ 
                counter.innerHTML= "Final level"
            }       
           else if (level >16){  
                simonChoice = [];
                start.setAttribute("disabled", true);
                counter.innerHTML ="You win the Game"
                displayScreen.innerHTML = 'Game is over'
            }  
        }   
}
   
    
// playerSelection()