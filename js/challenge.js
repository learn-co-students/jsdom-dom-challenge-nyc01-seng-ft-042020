

let counter = document.getElementById('counter');
myTimer = setInterval(function(){ parseInt(counter.innerText++)}, 1000);

//grab all buttons

//listen for clicks
//if a plus button, increment counter
//if minus button, increment conter

document.addEventListener("click",function(e){
    let counter = document.getElementById('counter');
    console.log("target", e.target);
    targetVar = e.target.id;
    if(targetVar === "minus"){
        counter = counter.innerText -= 1;
        }
    else if (targetVar === "plus"){
            parsedCounter = parseInt(counter.textContent);
            parsedCounter = parsedCounter + 1
        }

        
        else if (targetVar === "heart"){
            parseInt(counter.innerText += 1); 
            
        }
        else if(targetVar == "pause"){
            clearInterval(myTimer);
            targetVar.innerHTML = 'resume';
        }
        else if(targetVar === "submit"){
           
        }
    // const parentLi = e.target.parentNode
    // const scoreSpan = parentLi.querySelector(‘span’)
    // scoreSpan.textContent = parseInt(scoreSpan.textContent)  + 1
    // } else if (e.target.className === “delete” //or e.target.textContent === “delete”){
    // e.target.parentNode.remove()
    // }
    ;
    
});


    
    