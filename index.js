// var showMenu2 = document.getElementById('item2');
// var display2 = 1;

// function leftButton2() {
//    if (display2 == 1) {
//       showMenu2.style.display = 'block';
//       display2 = 0;
//    } else {
//       showMenu2.style.display = 'none';
//       display2 = 1;
//    }
// }
// var showMenu3 = document.getElementById('item3');
// var display3 = 1;

// function leftButton3() {
//    if (display3 == 1) {
//       showMenu3.style.display = 'block';
//       display3 = 0;
//    } else {
//       showMenu3.style.display = 'none';
//       display3 = 1;
//    }
// }
// var showMenu4 = document.getElementById('item4');
// var display4 = 1;

// function leftButton4() {
//    if (display4 == 1) {
//       showMenu4.style.display = 'block';
//       display4 = 0;
//    } else {
//       showMenu4.style.display = 'none';
//       display4 = 1;
//    }
// }
// var showMenu5 = document.getElementById('item5');
// var display5 = 1;

// function leftButton5() {
//    if (display5 == 1) {
//       showMenu5.style.display = 'block';
//       display5 = 0;
//    } else {
//       showMenu5.style.display = 'none';
//       display5 = 1;
//    }
// }

// var hideHam = document.getElementById('sidebar');
// var display = 1;

// function hide() {
//    if (display == 1) {
//       hideHam.style.display = 'none';
//       hideHam.style.gridTemplateColumns = '0 1fr';
//    }

// }
// var showHam = document.getElementById('sidebar');
// var display1 = 0;

// function show() {
//    if (display1 == 0) {
//       showHam.style.display = 'grid'
//       showHam.style.gridTemplateColumns = '0 1fr'

//    }
// }


var menu = document.getElementById('sidebar');
var body = document.getElementById('body');
var sidebarVisible = true;

function hide() {
   if (sidebarVisible) {
      menu.style.display = 'none'
      body.style.gridTemplateColumns = '0 1fr';

      sidebarVisible = false;
   }
}

function show() {
   if (!sidebarVisible) {
      menu.style.display = 'block'
      body.style.gridTemplateColumns = '130px 1fr';
      sidebarVisible = true;
   }
}

/* Catagory */

var catagory = document.getElementById('listCat');

function showCat() {
   catagory.style.display = 'block';
   setTimeout(() => {
      catagory.style.opacity = '1';
   }, 10);
}

function hideCat() {
   catagory.style.display = 'none';
   setTimeout(() => {
      catagory.style.opacity = '0';
   }, 10);
}








