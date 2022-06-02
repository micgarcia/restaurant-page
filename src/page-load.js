export default function pageLoad () {

  var content = document.createElement('div');
  content.setAttribute('id','content');
  document.body.appendChild(content);


  var navigation = document.createElement('div');
  navigation.setAttribute('class','nav');
  var home = document.createElement('button');
  home.setAttribute('id', 'home');
  var menu = document.createElement('button');
  menu.setAttribute('id', 'menu');
  var contact = document.createElement('button');
  contact.setAttribute('id', 'contact');

  navigation.appendChild(home);
  navigation.appendChild(menu);
  navigation.appendChild(contact);

  var page = document.createElement('div');
  page.setAttribute('id', 'page');

  var image = document.createElement('img');
  var headline = document.createElement('div');
  var bio = document.createElement('div');
  var hours = document.createElement('div');
  var location = document.createElement('div');

  page.append(image, headline, bio, hours, location);

  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';
  image.src = '../src/assets/Chick-fil-A-Logo.png';
  headline.innerHTML = 'Welcome to Chick-Fil-A';
  bio.innerHTML = 'Sample information about the restaurant';
  hours.innerHTML = 'Closed on Sunday';
  location.innerHTML = 'Vacaville, CA';

  content.appendChild(navigation);
  content.appendChild(page);
};