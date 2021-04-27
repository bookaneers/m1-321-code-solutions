function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name ' + event.target.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  console.log('blur.target.name ' + event.target.name);
}
function handleInput(event) {
  // console.log(event.target.name);
  console.log(event.target.value);
}

var $userName = document.getElementById('user-name');
var $userEmail = document.getElementById('user-email');
var $userMessage = document.getElementById('user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
