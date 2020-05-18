//fonction qui adapte la taille de la div contentPage à la taille de la page
var screenHeight = screen.availHeight;
var menuHeight = document.getElementById('topMenu').clientHeight;
var footerHeight = document.getElementById('bottomMenu').clientHeight;
document.getElementById('contentPage').style.minHeight = screenHeight - menuHeight - footerHeight + 'px';
