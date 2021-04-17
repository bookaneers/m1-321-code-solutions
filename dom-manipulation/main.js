var userClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
// var $className = elementNodeReference.hot - $hotButton;

function numOfClicks(event) {
  userClicks++;
  $clickCount.textContent = 'Clicks: ' + userClicks;

  if (userClicks < 4) {
    $hotButton.className = 'hot-button cold';
  }
  if (userClicks >= 4 && userClicks < 7) {
    $hotButton.className = 'hot-button cool';
  }
  if (userClicks >= 7 && userClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  }
  if (userClicks >= 10 && userClicks < 13) {
    $hotButton.className = 'hot-button warm';
  }
  if (userClicks >= 13 && userClicks < 16) {
    $hotButton.className = 'hot-button hot';
  }
  if (userClicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', numOfClicks);
