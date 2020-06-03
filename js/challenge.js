window.addEventListener('DOMContentLoaded', (event) => {
    console.log("why no working");
   let interval = setInterval(timer(),1000);
}); 

function timer(){
    let counter = document.getElementById("counter");
    let counterNumber = parseInt(counter.innerText);
    counterNumber += 1;
    counter.innerText = counterNumber;
    return counter;
};

