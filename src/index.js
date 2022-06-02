import './styles.css';
import pageLoad from './page-load.js';
import menuLoad from './menu.js';

pageLoad();


var menu = document.getElementById('menu');
menu.onclick = menuLoad;

var home = document.getElementById('home');
home.onclick = pageLoad;

