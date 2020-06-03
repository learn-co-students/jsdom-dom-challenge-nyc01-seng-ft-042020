/* eslint-disable prefer-const */
const counter = document.getElementById('counter');
function changeValue(num = 1) {
  if (num === 1) {
    let number = parseInt(counter.textContent) + 1;
    counter.textContent = number;
  } else {
    let number = parseInt(counter.textContent) + num;
    counter.textContent = number;
  }
}

const plus = document.getElementById('plus');
plus.addEventListener('click', function(e) {
  changeValue(1);
});

const minus = document.getElementById('minus');
minus.addEventListener('click', function(e) {
  changeValue(-1);
});

const like = document.getElementById('heart');
like.addEventListener('click', function(e) {
  const likes = document.getElementsByClassName('likes')[0];
  const likeLi = document.createElement('li');
  likeLi.textContent = `${counter.textContent} has been liked ${1} times`;

  likes.appendChild(likeLi);
});

window.setInterval(changeValue, 1000);
