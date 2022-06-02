export default function pageLoad () {
  var content = document.createElement('div');
  content.setAttribute('id','content');
  document.body.appendChild(content);

  var headline = document.createElement('div');
  var image = document.createElement('img');

  headline.innerHTML = 'Welcome to Chick-Fil-A';

  content.appendChild(image);
  content.appendChild(headline);
};