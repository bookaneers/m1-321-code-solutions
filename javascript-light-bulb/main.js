
var $sky = document.querySelector('.sky');
var $sun = document.querySelector('.sun');

$sun.addEventListener('click', function (event) {
  if ($sun.className === 'sun') {
    $sky.className = 'nightSky';
    $sun.className = 'nightSun';
  } else {
    $sky.className = 'sky';
    $sun.className = 'sun';
  }
});
