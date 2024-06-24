// Contains the Logic of TicTacToe
// window object (Browser Tab)
// window.document (Page)
// HTML Things can be access in JS by using DOM
window.addEventListener('load', bindEvents);
var buttons ;
function bindEvents(){
   
   buttons = window.document.getElementsByTagName('button');

// All 9 Buttons Must be Clickable
for(var i = 0 ; i<buttons.length; i++){
    buttons[i].addEventListener('click', printXorZero);
}
}




var isXorZero = false;
var isGameEnd = false;
function printXorZero(){
    const currentButton = this;
    if(!isGameEnd && currentButton.innerText.length==0){
        fillCount ++;
    currentButton.innerText = isXorZero?"X":"0";
    if(fillCount>=5 && isGameOver()){
        const winner = isXorZero?"X":"0";
        isGameEnd = true;
        window.document.getElementById('msg').innerText = 'Game Win by '+winner;
        playSound();
        return ;
    }
    if(fillCount ==9){
        window.document.getElementById('msg').innerText = 'Game Draw';
        isGameEnd = true;
    }
    isXorZero =!isXorZero;
    }
    // this  holds the current calling object reference
    // this - Keyword (Current Object Reference/ Address )
    //console.log('Print X or Zero Call ', this, typeof this);
}
// // Must not be blank
// 8 Possiblities (Same value (Row, Col , Dia))
var fillCount = 0; 
function isThreeSame(one , two,three){
    // First Check isNot Blank
    // then compare all these
    if(isNotBlank(one) && isNotBlank(two) && isNotBlank(three)){
    return one.innerText == two.innerText && one.innerText == three.innerText;
    }
    return false;
}

function isNotBlank(currentButton){
    return currentButton.innerText.length>0;
}

function isGameOver(){
    //8 Possiblities 
    // Call Three Same for Row Wise, Col Wise , Diagonal Wise
    // Game Draw
    return isThreeSame(buttons[0], buttons[1], buttons[2]) || isThreeSame(buttons[3], buttons[4], buttons[5]) || isThreeSame(buttons[6], buttons[7], buttons[8]) || isThreeSame(buttons[0], buttons[3], buttons[6]) || isThreeSame(buttons[1], buttons[4], buttons[7]) || isThreeSame(buttons[2], buttons[5], buttons[8]) || isThreeSame(buttons[0], buttons[4], buttons[8]) || isThreeSame(buttons[2], buttons[4], buttons[6]);


}

function playSound(){
    const sound = document.getElementById('sound');
    sound.play();
}

