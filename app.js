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
    } ,200)
    console.log(player)
    // playerSelection()
    // displayScreen.innerHTML = "It is my turn";
})
red.addEventListener('click', ()=> {
    // console.log("red clicked")
    startGame = true;
    red.style.backgroundColor = "red";
    player.push('red')
    setTimeout(()=>
    {
        red.style.backgroundColor = "tomato"
    } ,200)
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
    } ,200)
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
    // startGame =false;
    console.log(player)
    // playerSelection()
})

//--- Reset button functionality    ---------//
reset.addEventListener('click', ()=> {
    // console.log("reset clicked")
    counter.innerHTML = "";
    player = [];
    level = 1;
    simonChoice = [];
    displayScreen.innerHTML ="Press Start Button to begin the Game"
    start.style.background = "black";
    start.style.color = "cornflowerblue";
    start.disabled = false;
    win= true;
    startGame =true;
    // displayScreen.setAttribute("disabled", "true")
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
        start.style.background ="green";
        // start.classList.add('circleFlame')
        start.style.color ="white";
        player = [];
        getSelectedColor();
    }  
    // else{
    //     displayScreen.innerHTML = "It is my turn";
    // }
        // playerSelection()   
})
// --------------- Function for selecting random color--------------------//
function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * arrayColors.length)]
    // simonChoice.push(colorSelected)
    // console.log(colorSelected)
    if(level<=7){
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
                    } ,150)
                    
                }
                else if(simonChoice[i] === arrayColors[1]){
                    red.style.backgroundColor = "red";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        red.style.backgroundColor = "tomato"
                    } , 150)
                    
                }
                else if (simonChoice[i] === arrayColors[2]){
                    yellow.style.backgroundColor = "yellow";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        yellow.style.backgroundColor  = "lightyellow"
                    } ,150)
                    
                }
                else if (simonChoice[i] === arrayColors[3]){
                    blue.style.backgroundColor = "blue";
                    //  console.log(simonChoice[i])
                    setTimeout(()=>
                    {
                        blue.style.backgroundColor = "lightskyblue"
                    } ,150)

                }
            }  
        }, 1000 * i)
    })
    
}

// // // --------- player vs simon function comparsion-------------------//

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
                    console.log("Time expired");
                    lose();
                }
                level++;
            }
        },5000)
    } else if(level <= 7) {
        setTimeout(()=>{
            if(startGame === true){
                if(player.length === simonChoice.length && player.every((value, i) => value === simonChoice[i])){
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
        },8000)
    }
    
}
//----------- Winner Function -----------------//
function winner(){
    if(startGame === true){
        displayScreen.innerHTML ="Player wins level " + level + ".  Computers turn";
        // displayScreen.innerHTML = ;
    }
    else{
        return;
    }
    
    // start.setAttribute("enable", false);
}

// ----------- Lose Function------------------//
function lose(){
    displayScreen.innerHTML ="You lose." + "Click start to play a new game";
    counter.innerHTML ="Game Over";
    start.setAttribute("disabled", true);
    allButton.forEach(button =>{
        button.setAttribute('disabled', true)
    })
    win =false;
    
}

// // --------------- Game Over Function --------------------//
// function gameOver() {
//     counter.innerHTML =""
//     displayScreen.innerHTML ="Game Over"
// //     startGame = false;
// }
    // setTimeout(()=>{
    //     if(startGame === true){
    //         if(player.length === simonChoice.length && player.every((value, i) => value === simonChoice[i])){
    //             // displayScreen.innerHTML ="Proceed to the next level"
                
    //             setTimeout(()=>{
    //                 if(level <=5){
    //                     winner();
    //                     displayScreen.setAttribute("disabled", "true")
    //                     counter.setAttribute("disabled", "true")
    //                     counter.innerHTML = "Level - " + level; 
    //                 }
                    
    //             },600)
    //             setTimeout(()=>{
    //                 if(level <=10 ){
    //                     displayScreen.setAttribute("disabled", "true")
    //                     counter.innerHTML = "Level - " + level; 
    //                 }
    //             },1000)
    //             setTimeout(()=>{
    //                 if(level <=16 ){
    //                     displayScreen.setAttribute("disabled", "true")
    //                     counter.innerHTML = "Level - " + level; 
    //                     winner();
    //                 }
    //             },1500)
    //             setTimeout(()=>{
    //                 if (level >16){  
        //                     displayScreen.setAttribute("disabled", "true")
    //                     start.setAttribute("disabled", true);
    //                     simonChoice = [];
    //                     counter.innerHTML ="You win the Game";
    //                     displayScreen.innerHTML = 'Game is over';
    //                 }  
                // },1000)
                // levelDisplay()
                // console.log("Correct Match");
               
            // }
            // else
            // {
            //     start.setAttribute("disabled", true);
            //     console.log("Time expired");
            //     lose();
            // }
            // level++;
    //     }
    // },5000)

    // simonSelections()
// }


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