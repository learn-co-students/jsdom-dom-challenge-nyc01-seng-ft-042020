document.addEventListener("DOMContentLoaded", e => {
    const counter = document.querySelector("#counter")
    const minus = document.querySelector("#minus")
    const plus = document.querySelector("#plus")
    const heart = document.querySelector("#heart")
    const pause = document.querySelector("#pause")
    const likesLi = document.querySelector("body > ul")

    const increment = function () {
        counter.innerText ++
    }

    const timer = setInterval(increment, 1000)

    minus.addEventListener('click', e => {
        counter.innerText --
    })

    plus.addEventListener('click', e => {
        counter.innerText ++
    })

    heart.addEventListener('click', e=>{
        const newComment = document.createElement('li')
        newComment.innerText = counter.innerText + " has been liked "
        likesLi.appendChild(newComment)
    })

    pause.addEventListener('click', e=> {
        clearInterval(timer)
        
    })

})