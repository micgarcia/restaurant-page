export default function pageLoad () {
  var content = document.getElementById('content');

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

    page.append(image, headline, bio, hours, location);


    image.src = '../src/assets/Chick-fil-A-Logo.png';
    headline.innerHTML = 'Welcome to Chick-Fil-A';
    bio.innerHTML = '“We should be about more than just selling chicken. We should be a part of our customers lives and the communities in which we serve.” <br> -S. Truett Cathy';
    hours.innerHTML = 'Hours:<br>Sunday: Closed<br>Monday-Saturday: 6:30AM-10PM';
    location.innerHTML = '2081 Harbison Dr, Vacaville, CA 95687';

    content.appendChild(page);
  } else {
    var page = document.getElementById('page');
    page.innerHTML = '';


    var image = document.createElement('img');
    var headline = document.createElement('div');
    var bio = document.createElement('div');
    var hours = document.createElement('div');
    var location = document.createElement('div');

    page.append(image, headline, bio, hours, location);


    image.src = '../src/assets/Chick-fil-A-Logo.png';
    headline.innerHTML = 'Welcome to Chick-Fil-A';
    bio.innerHTML = '“We should be about more than just selling chicken. We should be a part of our customers lives and the communities in which we serve.” <br> -S. Truett Cathy';
    hours.innerHTML = 'Hours:<br>Sunday: Closed<br>Monday-Saturday: 6:30AM-10PM';
    location.innerHTML = '2081 Harbison Dr, Vacaville, CA 95687';

    content.appendChild(page);
  }

};