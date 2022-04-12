// ------- declaring valriable ---------//
let player = [];
let simonChoice = [];
const arrayColors = ['green','red','yellow','blue'];
let level =1;
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
const displayScreen = document.querySelector("#screenInput")
const allButton = document.querySelectorAll('#buttons')
// console.log(allButton)
const counter= document.querySelector("#inputCounter")

// --------------Disable the screen and level area---------------------//
displayScreen.setAttribute("disabled", "true")
counter.setAttribute("disabled", "true")

//--- adding eventListener and functionality for each button ---------//
green.addEventListener('click', () =>
 {
    // console.log("green clicked")
    startGame = true;
    green.style.backgroundColor = "green";
    player.push('green')
    setTimeout(()=>
    {
        green.style.backgroundColor = "springgreen"
    } ,150)
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
    } ,150)
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
    } ,150)
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
    } ,150)
    // startGame =false;
    console.log(player)
    // playerSelection()
})

//--- Reset button functionality    ---------//
reset.addEventListener('click', ()=> {
    // console.log("reset clicked")
    startGame = false;
    counter.innerHTML = "";
    player = [];
    simonChoice = [];
    displayScreen.innerHTML ="Press Start Button to begin the Game"
    start.style.background = "black";
    start.style.color = "cornflowerblue";
    start.setAttribute("enabled", false);
    displayScreen.setAttribute("disabled", "true")
    allButton.forEach(button =>{
        button.setAttribute('disabled', true)
    })
})

//--- Start button functionality  ---------//

let win = true; 
start.addEventListener('click', ()=> {
    // console.log("start clicked")
    if(win === false){
        return start.setAttribute("disabled", true);
        
    }
    if( startGame = true){
        displayScreen.innerHTML ="Player Turn"
        // level++
        counter.innerHTML = "Level - " + level;
        start.style.background ="green"
        start.style.color ="white"
        player = [];
        getSelectedColor();
    }  
        // playerSelection()   
})
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
    simonSelections();
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
                    } ,300)
                    
                }
                else if(simonChoice[i] === arrayColors[1]){
                    red.style.backgroundColor = "red";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        red.style.backgroundColor = "tomato"
                    } , 300)
                    
                }
                else if (simonChoice[i] === arrayColors[2]){
                    yellow.style.backgroundColor = "yellow";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        yellow.style.backgroundColor  = "lightyellow"
                    } ,300)
                    
                }
                else if (simonChoice[i] === arrayColors[3]){
                    blue.style.backgroundColor = "blue";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        blue.style.backgroundColor = "lightskyblue"
                    } ,300)
                    
                }
            }  
            displayScreen.innerHTML = "Players turn";
        }, 500 * i)
    })
}

// // // --------- player vs simon function comparsion-------------------//

function playerSelection(){
    setTimeout(()=>{
        if(startGame === true){
            if(player.length === simonChoice.length && player.every((value, i) => value === simonChoice[i])){
                // displayScreen.innerHTML ="Proceed to the next level"
                setTimeout(()=>{
                    if(level <=5){
                        displayScreen.setAttribute("disabled", "true")
                        counter.setAttribute("disabled", "true")
                        counter.innerHTML = "Level - " + level; 
                    }
                },700)
                setTimeout(()=>{
                    if(level <=10 ){
                        displayScreen.setAttribute("disabled", "true")
                        counter.innerHTML = "Level - " + level; 
                    }
                },1000)
                setTimeout(()=>{
                    if(level <=16 ){
                        displayScreen.setAttribute("disabled", "true")
                        counter.innerHTML = "Level - " + level; 
                    }
                },1500)
                setTimeout(()=>{
                    if (level >16){  
                        displayScreen.setAttribute("disabled", "true")
                        start.setAttribute("disabled", true);
                        simonChoice = [];
                        counter.innerHTML ="You win the Game";
                        displayScreen.innerHTML = 'Game is over';
                    }  
                },2000)
                // levelDisplay()
                console.log("Correct");
                
                winner();
            }
            else
            {
                start.setAttribute("disabled", true);
                console.log("Time expired");
                lose();
            }
            level++;
        }
    },7000)
    
    // simonSelections()
}

//----------- Winner Function -----------------//
function winner(){
    displayScreen.innerHTML ="You win the " + level + " level. Press start to coninue the game";
    // start.setAttribute("enable", false);
}

// ----------- Lose Function------------------//
function lose(){
    displayScreen.innerHTML ="You lose the game";
    counter.innerHTML ="Game Over";
    start.setAttribute("disabled", true);
    allButton.forEach(button =>{
        button.setAttribute('disabled', true)
    })
    win =false;
    
}

// --------------- Game Over Function --------------------//
function gameOver() {
    counter.innerHTML =""
    displayScreen.innerHTML ="Game Over"
    startGame = false;
}

// --------------- Level of the game --------------------//
// function levelDisplay(){
//     // level = Math.min(level +=1);
//     if (startGame === true){
//             level ++;
//            if(level <=5){
//                 counter.innerHTML = "Level - " + level; 
//             }
//            else if (level <= 16){ 
//                 counter.innerHTML= "Final level"
//             }       
//            else if (level >16){  
//                 simonChoice = [];
//                 start.setAttribute("disabled", true);
//                 counter.innerHTML ="You win the Game"
//                 displayScreen.innerHTML = 'Game is over'
//             }  
//         }   
// }