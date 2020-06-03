document.addEventListener("DOMContentLoaded", function(){

    const counter = document.querySelector('#counter');

    const likes = document.querySelector(".likes");

    let timer = setInterval(increment, 1000);

    let isTimerRunning = true;

    const buttons =
            [document.getElementById('minus'),
            document.getElementById('plus'),
            document.getElementById('heart')];

    function increment () {
        counter.textContent = parseInt(counter.textContent) + 1
    };

    function decrement () {
        counter.textContent = parseInt(counter.textContent) - 1
    };

    function like(){

        liExists = document.getElementById(`${counter.innerText}`)

        if (liExists) {
            liExists.dataset.likes++
            liExists.textContent = `${counter.textContent} has been liked ${liExists.dataset.likes} times`;
        }

        else {
            const newLi = document.createElement("li");
            newLi.id = `${counter.innerText}`
            newLi.dataset.likes = 1;
            newLi.textContent = `${counter.textContent} has been liked ${newLi.dataset.likes} times`;
            likes.appendChild(newLi);
        }

        // console.log(clicks);

        // if (clicks === 0) {
        //     const newLi = document.createElement("li");
        //     likes.appendChild(newLi);
        //     clicks++;
        //     console.log(clicks);
        //     newLi.textContent = `${counter.textContent} has been liked ${clicks} times`;
        // }

        // else if (clicks > 0) {
        //     clicks++;
        //     console.log(clicks);
        //     likes.querySelector("li").textContent = `${counter.textContent} has been liked ${clicks} times`;
        // }

    };

    document.addEventListener("click", function(e){
        if (e.target.id === "plus") {
            increment();
        }
        else if (e.target.id === "minus") {
            decrement();
        }

        else if (e.target.id === "heart") {
            like();
        }

        else if (e.target.id === "pause") {
            if (isTimerRunning) {
                clearInterval(timer); 
                buttons.forEach(element => element.disabled = true);
                e.target.textContent = "resume";
                isTimerRunning = false 
            }

            else {
                timer = setInterval(increment, 1000)    
                buttons.forEach(element => element.disabled = false);
                e.target.textContent = "pause";
                isTimerRunning = true 
            }
        }
    })

    document.getElementById('comment-form').addEventListener("submit", function(e) {
        const textBox = document.querySelector("#comment-input")
        const list = document.querySelector('#list')
        const li = document.createElement('p')
        list.appendChild(li)

        li.textContent = textBox.value
        e.preventDefault()
    })
    
});

