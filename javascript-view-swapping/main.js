
var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  var $resultTab = event.target.matches('.tab');
  if ($resultTab) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i].textContent === event.target.textContent) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  var $attributeDataView = event.target.getAttribute('data-view');
  for (var k = 0; k < $view.length; k++) {
    if ($view[k].getAttribute('data-view') === $attributeDataView) {
      $view[k].className = 'view';
    } else {
      $view[k].className = 'view hidden';
    }
  }
});
