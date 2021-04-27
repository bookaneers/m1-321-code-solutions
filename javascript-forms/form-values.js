var $contactForm = document.getElementById('contact-form');
console.log($contactForm);

$contactForm.addEventListener('submit', function () {
  event.preventDefault();
  var messageData = {};
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log(messageData);
});
