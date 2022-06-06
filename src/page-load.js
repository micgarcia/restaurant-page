export default function pageLoad () {

  var content = document.getElementById('content');
  var font = document.createElement('style');
  font.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap')";


  /* Loads tab menu if it isn't already loaded */
  if (document.getElementById('home') === null) {
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

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    content.appendChild(navigation);
  };

  /* If page's content is not loaded, it creates it
     otherwise it clears current content and loads new home page */

  if (document.getElementById('page') === null) {
    var page = document.createElement('div');
    page.setAttribute('id', 'page');

    var image = document.createElement('img');
    var headline = document.createElement('div');
    var bio = document.createElement('div');
    var hours = document.createElement('div');
    var location = document.createElement('div');

    image.setAttribute('class', 'homePage');
    headline.setAttribute('class', 'homePage');
    bio.setAttribute('class', 'homePage');
    hours.setAttribute('class', 'homePage');
    location.setAttribute('class', 'homePage');

    page.append(image, headline, bio, hours, location);


    image.src = 'https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png';
    headline.innerHTML = 'Welcome to Chick-Fil-A';
    headline.style.fontSize = "36px";
    bio.innerHTML = '“We should be about more than just selling chicken. We should be a part of our customers lives and the communities in which we serve.”';
    bio.style.fontSize = "26px";
    hours.innerHTML = 'Hours:<br>Sunday: Closed<br>Monday-Saturday: 6:30AM-10PM';
    hours.style.fontSize = "26px";
    location.innerHTML = '2081 Harbison Dr, Vacaville, CA 95687';
    location.style.fontSize = "24px";

    var leftCol = document.createElement('b');
    var rightCol = document.createElement('b');
    leftCol.setAttribute('id', 'leftCol');
    rightCol.setAttribute('id', 'rightCol');
    leftCol.innerHTML = '';
    page.append(leftCol, rightCol);

    content.appendChild(page);
  } else {
    var page = document.getElementById('page');
    page.innerHTML = '';


    var image = document.createElement('img');
    var headline = document.createElement('div');
    var bio = document.createElement('div');
    var hours = document.createElement('div');
    var location = document.createElement('div');

    image.setAttribute('class', 'homePage');
    headline.setAttribute('class', 'homePage');
    bio.setAttribute('class', 'homePage');
    hours.setAttribute('class', 'homePage');
    location.setAttribute('class', 'homePage');

    page.append(image, headline, bio, hours, location);


    image.src = 'https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png';
    headline.innerHTML = 'Welcome to Chick-Fil-A';
    headline.style.fontSize = "36px";
    bio.innerHTML = '“We should be about more than just selling chicken. We should be a part of our customers lives and the communities in which we serve.”';
    bio.style.fontSize = "26px";
    hours.innerHTML = 'Hours:<br>Sunday: Closed<br>Monday-Saturday: 6:30AM-10PM';
    hours.style.fontSize = "26px";
    location.innerHTML = '2081 Harbison Dr, Vacaville, CA 95687';
    location.style.fontSize = "24px";

    var leftCol = document.createElement('b');
    var rightCol = document.createElement('b');
    leftCol.setAttribute('id', 'leftCol');
    rightCol.setAttribute('id', 'rightCol');
    page.append(leftCol, rightCol);

    content.appendChild(page);
  };

};