// /* eslint-disable prefer-const */
// let isPaused = false

// const counter = document.getElementById('counter');
// function changeValue(num = 1) {
//   if (num === 1) {
//     let number = parseInt(counter.textContent) + 1;
//     counter.textContent = number;
//   } else {
//     let number = parseInt(counter.textContent) + num;
//     counter.textContent = number;
//   }
// }

// const plus = document.getElementById('plus');
// plus.addEventListener('click', function(e) {
//   changeValue(1);
// });

// const minus = document.getElementById('minus');
// minus.addEventListener('click', function(e) {
//   changeValue(-1);
// });

// const like = document.getElementById('heart');
// like.addEventListener('click', function(e) {
//     let actionTaken = false 
//     const likes = document.getElementsByClassName('likes')[0];
//     const lis = likes.children; 
//     const lisArray = Array.from(lis)
//     if (lisArray.length > 0){
//         lisArray.forEach(li => {
//             const string = li.textContent.split(" ")
//             if (string[0] === counter.textContent){
//             string[string.length - 2] = parseInt(string[string.length - 2]) + 1
//             const newString = string.join(" ")
//             li.textContent = newString
//             actionTaken = true
//             }
//         });
//         if (!actionTaken){
//             const likeLi = document.createElement('li');
//             likeLi.textContent = `${parseInt(counter.textContent)} has been liked ${1} times`;  
//             likes.appendChild(likeLi); 
//         }
//     } else {
//     const likeLi = document.createElement('li');
//     likeLi.textContent = `${parseInt(counter.textContent)} has been liked ${1} times`;  
//     likes.appendChild(likeLi);    
//     }
  
// });

// window.setInterval(function(){
//     if (!isPaused){
//         changeValue(1)
//     } 
// }, 1000);

// const pause = document.getElementById('pause')
// pause.addEventListener('click', function(e){
//     if (pause.textContent === "pause"){
//         isPaused = true
//         pause.textContent = "resume"
//         document.getElementById("plus").disabled = true
//         document.getElementById("minus").disabled = true
//         document.getElementById("heart").disabled = true
//     } else {
//         isPaused = false
//         pause.textContent = "pause"
//         document.getElementById("plus").disabled = false
//         document.getElementById("minus").disabled = false
//         document.getElementById("heart").disabled = false
//     }
// });

// const submit = document.getElementById("submit")
// submit.addEventListener('submit', function(e){
//     const text = document.getElementById("comment-input")
//     const comments = document.getElementById("comments")
//     console.log(comments)
//     const p = document.createElement('p')
//     p.textContent = text.value
//     comments.append(p)
//     e.preventDefault()
// })


const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const likesUl = document.querySelector('.likes')
const allComments = documents.querySelector('list')

let timer = setInterval(incrementCounter, 1000)


function incrementCounter(){
    let number = parseInt(counter.innerText)
    number++
    counter.innerText = number
}

function decrementCounter(){
    let number = parseInt(counter.innerText)
    number--
    counter.innerText = number
}

plusButton.addEventListener('click', incrementCounter)
minusButton.addEventListener('click', decrementCounter)
heartButton.addEventListener('click', function(e){
    let liExist = document.getElementById(`${counter.innerText}Likes`)
    if (liExist){
        let likes = parseInt(liExist.dataset.likes)
        likes += 1
        liExist.dataset.likes = likes
        liExist.innerText = `${counter.innerText} has been liked ${liExist.dataset.likes} times`
    } else {
        let likeLi = document.createElement('li')
        likeLi.dataset.likes = 1
        likeLi.id = `${counter.innerText}Likes`
        likeLi.innerText = (`${counter.innerText} has been liked ${likeLi.dataset.likes} time`)
        likesUl.append(likeLi)
    }

})

pauseButton.addEventListener('click', function(e){
    if (isTimerRunning === true){
        clearInterval(timer)
        pauseButton.innerText = 'resume'
        plusButton.disabled = true
        minusButton.disabled = true
        heartButton.disabled = true
        submitButton.disabled = true
        isTimerRunning = false
    } else {
        timer = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'resume'
        plusButton.disabled = false
        minusButton.disabled = false
        heartButton.disabled = false
        submitButton.disabled = false
        isTimerRunning = true
    }
})

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    let commentDiv = document.createElement('div')
    let comment = document.querySelector('#comment-input').value
    document.querySelector("#comment-input").value = ''
    commentDiv.innerText = comment
    allComments.append(commentDiv)

})