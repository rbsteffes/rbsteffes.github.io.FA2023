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
        // Register events for our buttons

        buttons.push(button);
        simonGameDiv.appendChild(button);

        button.id = "button"+i;
        button.style.backgroundColor = "";
        button.classList.add("buzzer");
        button.style.border = "1px solid black";
        button.style.flexBasis = "40%";
        button.style.flexGrow = 0;
        button.style.flexShrink = 0;
        button.onclick = buttonClick;
    }
    
   

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

function gameClick(event){
    alert("Game Click");
}

function buttonClick(event){
    let target = event.target;
    alert(target.id);
    event.stopPropagation();
    
}

window.addEventListener('DOMContentLoaded', initialize, false);


