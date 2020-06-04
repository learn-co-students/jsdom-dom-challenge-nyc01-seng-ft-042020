const counter = document.getElementById('counter')
let counterNumber = parseInt(counter.innerText)
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')
const likesUL = document.getElementsByClassName('likes')[0]
const commentsDiv = document.getElementsByClassName('comments')[0]

let isTimerRunning = true
let timer = setInterval(incrementTimer, 1000)

function incrementTimer(){
    let counterNumber = parseInt(counter.innerText)
    counterNumber ++
    counter.innerText = counterNumber
}

function decrementTimer(){
    let counterNumber = parseInt(counter.innerText)
    counterNumber --
    counter.innerText = counterNumber
}

minusButton.addEventListener('click', decrementTimer)
plusButton.addEventListener('click', incrementTimer)

pauseButton.addEventListener('click', function(e){
    if (isTimerRunning) {
        clearInterval(timer)
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true
        submitButton.disabled = true
        pauseButton.innerText = "resume"
        isTimerRunning = false
    } else {
        timer = setInterval(incrementTimer, 1000)
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false
        submitButton.disabled = false
        counter.innerText = 0
        pauseButton.innerText = "pause"
        isTimerRunning = true
    }
})

heartButton.addEventListener('click', function(e){
    // if li exists, add 1
    // if li doesn't exist, create element
    likesElement = document.getElementById(`${counter.innerText}Likes`)
    if (likesElement) {
        let liked = parseInt(likesElement.dataset.likes)
        liked ++
        likesElement.dataset.likes = liked
        likesElement.innerText = `${counter.innerText} was liked ${likesElement.dataset.likes} time`
    } else {
        let likesLI = document.createElement('li')
        likesLI.dataset.likes = 1
        likesLI.id = `${counter.innerText}Likes`
        likesLI.innerText = `${counter.innerText} was liked 1 time`
        likesUL.append(likesLI)
    }

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let commentDiv = document.createElement('div')
    let comment = document.getElementById('comment-input').value
    console.log(commentDiv)
    commentDiv.innerText = comment
    commentsDiv.append(commentDiv)
    })

})