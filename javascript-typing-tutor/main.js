
var $black = document.querySelectorAll('.black');
var i = 0;

function checkLetter(e) {
  $black[i].style.borderBottom = 'none';
  if (e.key === $black[i].textContent) {
    $black[i].className = 'green';
    i++;
    $black[i].style.borderBottom = '4px solid black';
  } else {
    $black[i].className = 'red';
    $black[i].style.borderBottom = '4px solid red';
  }
}

document.addEventListener('keydown', checkLetter);
