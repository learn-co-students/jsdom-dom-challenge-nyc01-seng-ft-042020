let counter = document.getElementById("counter");
let counterNumber = 0;

function timer(){
    counterNumber ++;
    counter.innerText = counterNumber;
};


// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log("why no working");
//     let interval = setInterval(function timer(){
//     counterNumber ++;
//     counter.innerText = counterNumber;
//     },1000)
// }); 

const pause = document.getElementById('pause')

window.addEventListener('DOMContentLoaded', (event) => {
    let interval = setInterval(timer,1000);
    pause.addEventListener('click', function pauseTimer(){
        clearInterval(interval);
        buttonPauser();
        pause.innerText = "resume";
    })
}); 

function buttonPauser(){
    let buttonMinus = document.getElementById('minus')
    let buttonPlus = document.getElementById('plus')
    let buttonHeart = document.getElementById('heart')
    let buttonSubmit = document.getElementById('submit')

    buttonMinus.disabled = true
    buttonPlus.disabled = true
    buttonHeart.disabled = true
    buttonSubmit.disabled = true
}

function buttonResumer(){
    let buttonMinus = document.getElementById('minus')
    let buttonPlus = document.getElementById('plus')
    let buttonHeart = document.getElementById('heart')
    let buttonSubmit = document.getElementById('submit')

    buttonMinus.disabled = false
    buttonPlus.disabled = false
    buttonHeart.disabled = false
    buttonSubmit.disabled = false
}

pause.addEventListener('click', function resumeTimer(){
        counterNumber = 0;
        pause.textContent = "pause";        
        buttonResumer();
    });

const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

minus.addEventListener('click', function minusTimer(){
    counterNumber = parseInt(counter.innerText);
    counterNumber --;
    counter.innerText = counterNumber;
})

plus.addEventListener('click', function plusTimer(){
    counterNumber = parseInt(counter.innerText);
    counterNumber ++;
    counter.innerText = counterNumber;
})




