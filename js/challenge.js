document.addEventListener("DOMContentLoaded", function(){
    const counter = document.querySelector('#counter')

    const likes = document.querySelector(".likes")

    let clicks = 0;

    function increment () {
        counter.textContent = parseInt(counter.textContent) + 1
    };

    function decrement () {
        counter.textContent = parseInt(counter.textContent) - 1
    };

    function like(clicks){
        if (clicks === 0) {
            const newLi = document.createElement("li");
            likes.appendChild(newLi);
            clicks++;
            newLi.textContent = `${counter.textContent} has been liked ${clicks} times`;
        }
        else if (clicks > 0) {
            likes.querySelector("li").textContent = `${counter.textContent} has been liked ${clicks} times`;
        }
    };

    // setInterval(increment, 1000);

    const not_paused = true

    // while (not_paused) {
    //     console.log("incrementing!");
    //     setInterval(increment, 1000);
    // };

    document.addEventListener("click", function(e){
        if (e.target.id === "plus") {
            // const body = e.target.parentNode
            // const counter = body.getElementById("counter")
            increment();
        }
        else if (e.target.id === "minus") {
            decrement();
        }

        else if (e.target.id === "heart") {
            like(clicks);
        }

        else if (e.target.id === "pause") {
            not_paused = false;
            // clearTimeout(setInterval(increment, 1000)); 
            // console.log("pausing");

            e.target.textContent = "resume";
            e.target.id = "resume";
        }

        else if (e.target.id === "resume") {
            not_paused = true;

            e.target.textContent = "pause";
            e.target.id = "pause";
        }
    })
});