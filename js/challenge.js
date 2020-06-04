heart.addEventListener('click', function(){
      const parentLi = heart.parentNode
      const scoreSpan = parentLi.querySelector('span')
      scoreSpan.textContext = parseInt(scoreSpan.textContext) + 1
  })