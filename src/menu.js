export default function menuLoad () {
  var page = document.getElementById('page');
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  };

  var test = document.createElement('div');
  test.innerHTML = 'Test!';

  document.body.appendChild(test);
};