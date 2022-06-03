/* Exports module function that clears page content and loads contact page content */

export default function contactLoad () {
  var page = document.getElementById('page');
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  };

  var test = document.createElement('div');
  test.innerHTML = 'Contact Test!';

  page.appendChild(test);

};