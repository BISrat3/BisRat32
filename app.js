// ------- declaring valriable ---------//
let player = [];
let simonChoice = [];
const arrayColors = ['green','red','yellow','blue'];
let level =1;
let startGame = false;

// ------- query selection elements ---------//
const green = document.querySelector('.greenBtn')

const red = document.querySelector('.redBtn')

const start = document.querySelector('.startBtn')

const yellow = document.querySelector('.yellowBtn')

const blue = document.querySelector('.blueBtn')

const reset = document.querySelector('.resetBtn')

const displayScreen = document.querySelector("#screenInput")
const allButton = document.querySelectorAll('#buttons')

const counter= document.querySelector("#inputCounter")

// --------------Disable the screen and level area---------------------//
displayScreen.setAttribute("disabled", "true")
counter.setAttribute("disabled", "true")

//--- adding eventListener and functionality for each button ---------//
green.addEventListener('click', () =>
 {
    startGame = true;
    green.style.backgroundColor = "green";
    player.push('green')
    setTimeout(()=>
    {
        green.style.backgroundColor = "springgreen"
    } ,200)
    console.log(player)

})

red.addEventListener('click', ()=> {
    startGame = true;
    red.style.backgroundColor = "red";
    player.push('red')
    setTimeout(()=>
    {
        red.style.backgroundColor = "tomato"
    } ,200)
    console.log(player)
}) 

blue.addEventListener('click', ()=> {

    startGame = true;
    blue.style.backgroundColor = "blue";
    player.push('blue')
    setTimeout(()=>
    {
        blue.style.backgroundColor  = "lightskyblue"
    } ,200)
    console.log(player)
})

yellow.addEventListener('click', ()=> {

    startGame = true;
    yellow.style.backgroundColor = "yellow";
    player.push('yellow')
    setTimeout(()=>
    {
        yellow.style.backgroundColor = "lightyellow"
    } ,200)

    console.log(player)
})

//--- Reset button functionality    ---------//
reset.addEventListener('click', ()=> {

    counter.innerHTML = "";
    player = [];
    level = 1;
    simonChoice = [];
    displayScreen.innerHTML ="Press Start Button to begin the Game"
    start.style.background = "black";
    start.style.color = "cornflowerblue";
    start.disabled = false;
    win = true;
    startGame =true;
    
})

//--- Start button functionality  ---------//
let win = true; 
start.addEventListener('click', ()=> {
    if(win === false){
        return start.setAttribute("disabled", true);
    }
    if( startGame = true){
        displayScreen.innerHTML ="Player Turn"
        counter.innerHTML = "Level - " + level;
        start.style.background ="green";
        start.style.color ="white";
        player = [];
        getSelectedColor();
    }  
})

// --------------- Function for selecting random color--------------------//
function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * arrayColors.length)]
    if(level<=10){
        simonChoice.push(colorSelected)
    }
    else{
        simonChoice.pop(colorSelected)
    }
    playerSelection()
    console.log(simonChoice)
    simonSelections();
}

// --------------- function of simon selection--------------------//
function simonSelections(){    
    simonChoice.forEach((colorSelected, i) => {
        setTimeout(()=>{
            if (startGame === true){
                if(simonChoice[i] === arrayColors[0]){
                    green.style.backgroundColor = "green";
                    setTimeout(()=>
                    {
                        green.style.backgroundColor = "springgreen"
                    } ,150)
                    
                }
                else if(simonChoice[i] === arrayColors[1]){
                    red.style.backgroundColor = "red";
                    setTimeout(()=>
                    {
                        red.style.backgroundColor = "tomato"
                    } , 150)
                    
                }
                else if (simonChoice[i] === arrayColors[2]){
                    yellow.style.backgroundColor = "yellow";

                    setTimeout(()=>
                    {
                        yellow.style.backgroundColor  = "lightyellow"
                    } ,150)
                    
                }
                else if (simonChoice[i] === arrayColors[3]){
                    blue.style.backgroundColor = "blue";

                    setTimeout(()=>
                    {
                        blue.style.backgroundColor = "lightskyblue"
                    } ,150)

                }
            }  
        }, 1000 * i)
    })
    
}

//--------- player vs simon function comparsion-------------------//
// -------- Used reference W3 docs and stackoverflow-------------//
function playerSelection(){
    if(level <= 5) {
        setTimeout(()=>{
            if(startGame === true){
                if(player.length === simonChoice.length && player.every((value, i) => value === simonChoice[i])){
                    winner();
                }
                else
                {
                    start.setAttribute("disabled", true);
                    lose();
                }
                level++;
            }
        },7000)
    } else if(level < 10) {
        setTimeout(()=>{
            if(startGame === true){
                if(player.length === simonChoice.length && player.every((value, i) => value === simonChoice[i])){
                    winner();
                }
                else
                {
                    start.setAttribute("disabled", true);
                    lose();
                }
                level++;
            }
        },10000)
        
    }
    else if(level === 10) {
        setTimeout(()=>{
            if(startGame === true){
                if(player.length === simonChoice.length && player.every((value, i) => value === simonChoice[i])){
                    winner();
                }
                else
                {
                    start.setAttribute("disabled", true);

                    lose();
                }
            }
        },12000)
    }
} 

//----------- Winner Function -----------------//
function winner(){
    if(startGame === true && level < 10){
        displayScreen.innerHTML ="Player wins level " + level + ".  Computers turn";

    }
    else if(startGame === true && level === 10){
        displayScreen.innerHTML ="Congratulation you win."
    }
    else {
        return 
    }
}

// ----------- Lose Function------------------//
function lose(){
    displayScreen.innerHTML ="You lose." + "Click Reset and Start to play a new game";
    counter.innerHTML ="Game Over";
    start.setAttribute("disabled", true);
    // allButton.forEach(button =>{
    //     button.setAttribute('disabled', true)
    // })
    win =false;  
}

