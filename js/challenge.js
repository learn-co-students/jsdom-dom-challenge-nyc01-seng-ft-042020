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

    const t = setInterval(increment, 1000);

    const buttons =
            [document.getElementById('minus'),
            document.getElementById('plus'),
            document.getElementById('heart')]

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
            clearTimeout(t); 
            buttons.forEach(element => element.disabled = true)
            // console.log("pausing");

            e.target.textContent = "resume";
            e.target.id = "resume";
        }

        else if (e.target.id === "resume") {
            // setInterval(increment, 1000);
            buttons.forEach(element => element.disabled = false)
            e.target.textContent = "pause";
            e.target.id = "pause";
        }
    })

    document.getElementById('comment-form').addEventListener("submit", function(e) {
        const list = document.querySelector('#list')
        const li = document.createElement('p')
        list.appendChild(li)
        const textBox = document.querySelector("#comment-input")
        li.textContent = textBox.value
        e.preventDefault()
        console.log(textBox.value)
    })
    
});

