function initialize(){
    // Create and add our buttons
    var simonGameDiv = document.createElement("div");
    simonGameDiv.style.width= "90vh";
    simonGameDiv.style.height = "90vh";
    simonGameDiv.style.display = "flex";
    simonGameDiv.id = "GameBox";
    
    simonGameDiv.style.flexDirection = "row";   //  1 2 3 4
    simonGameDiv.style.flexWrap = "wrap"; // 1 2
                                        // 3 4

    var buttons = [];
    for( var i = 0; i<4; i++)
    {
        var button = document.createElement("div");
        

        buttons.push(button);
        simonGameDiv.appendChild(button);

        button.id = "button"+i;
        button.classList.add("buzzer");

        //Style it
        button.style.backgroundColor = "";
        
        button.style.border = "1px solid black";
        button.style.flexBasis = "40%";
        button.style.flexGrow = 0;
        button.style.flexShrink = 0;
        
        // Register events for our buttons
        button.onclick = buttonClick;
        
    }
    //Todo: Add start button
    
   

    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = ` 
    .buzzer:nth-of-type(1)
    { 
        border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%   ;
        background-color: yellow;
    }
    .buzzer:nth-of-type(2)
    { 
        border-radius: 0% 100% 100% 0% / 0% 100% 0% 100%  ;
        background-color: blue;
    }
    .buzzer:nth-of-type(3)
    { 
        border-radius: 100% 0% 0% 100% / 0% 100% 0% 100%   ;
        background-color: red;
    }
    
    .buzzer:nth-of-type(4)
    { 
        border-radius: 0% 100% 100% 0% / 0% 0% 100% 100%   ;
        background-color:green;
    }
    
    .flashing{
        animation-name: buzzFlash;   
        animation-duration: .1s;
        animation-iteration-count: 10;
        animation-direction: alternate;
    }

    @keyframes buzzFlash
    {
        0%{ opacity: 100;}
        100%{ opacity: 0;}
    }`;

    simonGameDiv.appendChild(styleBlock);

    document.body.appendChild(simonGameDiv);
    // Initialize some global data
}

var chosenArray = [];
var userChoice = 0;
var replayIndex = 0;

function play(){
    // flash all the buttons in a circle

    // Pick a random index
    // Make the random button flash in the button list
    // Add class to button to flash
    // Push onto an array of chosen buttons
}

function buttonClick(event){
    let target = event.target;
    event.stopPropagation();
    // See which button was chosen
    // Check button against array
    // Increment userChoice
    // if right:
    // check if there are buttons left to pick
    // if more left to pick
    //     Nothing
    // if no more left to pick
    //     Replay the list, and the new button
}

function replayChosen(){

    // go over the buttons and take flash OFF the class


    // go over buttons and make them flash by putting flash back ON the class for 
    // the button at the replayIndex
    // Increment the replayIndex
    // if I haven't replayed everything
    //      call myself again with setTimeout
    // otherwise 
    //      call play to pick a new one

}

window.addEventListener('DOMContentLoaded', initialize, false);


