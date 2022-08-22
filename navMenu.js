var nav = document.getElementById('nav');
var btnMenu = document.getElementById('btn-header');
console.log(btnMenu);
btnMenu.onclick =function(){
    nav.classList.add('open');
}

var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
console.log(menuItems);
for( var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
        nav.classList.remove('open');
    }
}