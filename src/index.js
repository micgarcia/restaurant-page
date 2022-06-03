/* Importing modules */
import './styles.css';
import pageLoad from './page-load.js';
import menuLoad from './menu.js';
import contactLoad from './contact.js';

/*Creates single content div that all content is inside of */
var content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);

/*Initial Homepage laod */
pageLoad();

/*Listener event logic that loads module functions for each tab */
var menu = document.getElementById('menu');
menu.onclick = menuLoad;

var home = document.getElementById('home');
home.onclick = pageLoad;

var contact = document.getElementById('contact');
contact.onclick = contactLoad;