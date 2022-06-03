/* Exports module function that clears page content and loads menu content */

export default function menuLoad () {
  var page = document.getElementById('page');
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  };

  var test = document.createElement('div');
  test.innerHTML = 'Menu Test!';

  page.appendChild(test);

};