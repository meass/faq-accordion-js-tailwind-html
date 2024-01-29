function toggleAnswer(id, btnId) {
  let answer = document.getElementById(id)
  const btn = document.getElementById(btnId)
  const iconPlus = btn.nextElementSibling
  const iconMinus = iconPlus.nextElementSibling

  /*The Element.scrollHeight read-only property is a measurement of the height of an element's content, including content not visible on the screen due to overflow.*/
  if(answer.style.maxHeight) {
    answer.style.maxHeight = null
    iconMinus.style.display = 'none'
    iconPlus.style.display = 'block'
  }else {
    answer.style.maxHeight = answer.scrollHeight + 'px'
    iconMinus.style.display = 'block'
    iconPlus.style.display = 'none'
  }
}