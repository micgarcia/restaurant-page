/* Exports module function that clears page content and loads menu content */

export default function menuLoad () {
  var page = document.getElementById('page');
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  };

  var menu = document.createElement('div');

  var spChickenImg = document.createElement('img');
  var spChicken = document.createElement('p');
  spChicken.innerHTML = 'Spicy Chicken Sandwich';
  spChickenImg.src = 'https://www.cfacdn.com/img/order/menu/Online/Entrees/CFASpicySandwich_1080.png';
  menu.append(spChickenImg, spChicken);


  var chNugsImg = document.createElement('img');
  var chNugs = document.createElement('p');
  chNugs.innerHTML = 'Chicken Nuggets';
  chNugsImg.src = 'https://www.cfacdn.com/img/order/menu/Online/Entrees/nuggets_8ct_PDP.png';
  menu.append(chNugsImg, chNugs);

  var friesImg = document.createElement('img');
  var fries = document.createElement('p');
  fries.innerHTML = 'Waffle Potato Fries';
  friesImg.src = 'https://www.cfacdn.com/img/order/menu/Online/Sides%26treats/Medium_Lowered_1217shoot_1080x1080.png';
  menu.append(friesImg, fries);

  page.appendChild(menu);

};