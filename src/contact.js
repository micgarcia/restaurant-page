/* Exports module function that clears page content and loads contact page content */

export default function contactLoad () {
  var page = document.getElementById('page');
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  };

  var contact = document.createElement('div');
  contact.setAttribute('class', 'contactPage');

  var contactInfo = document.createElement('p');
  contactInfo.innerHTML = 'Contact Info:<br>Address: 2081 Harbison Dr, Vacaville, CA 95687<br>Phone: (707) 447-1269';

  contactInfo.setAttribute('class', 'contactPage');
  contact.appendChild(contactInfo);

  var leftCol = document.createElement('b');
  var rightCol = document.createElement('b');
  leftCol.setAttribute('id', 'leftCol');
  rightCol.setAttribute('id', 'rightCol');
  leftCol.innerHTML = '';
  page.append(leftCol, rightCol);
  page.appendChild(contact);

};