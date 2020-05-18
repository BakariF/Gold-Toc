//fonction qui adapte la taille de la div contentPage à la taille de la page
var screenHeight = screen.availHeight;
var menuHeight = document.getElementById('topMenu').clientHeight;
var footerHeight = document.getElementById('bottomMenu').clientHeight;
document.getElementById('contentPage').style.minHeight = screenHeight - menuHeight - footerHeight + 'px';
//fonction montrant la présentation du produit sélectionné
function showPresentation(price, ref, title) {
    //var textPresentation = document.getElementById(ref).innerHTML;
    var presentationImage = document.getElementById('presentationImage');
    var presentationTitle = document.getElementById('presentationTitle');
    var presentationTexte = document.getElementById('presentationText');
    var presentationPrice = document.getElementById('presentationPrice');
    var addBasketButton = document.getElementById('addBasketButton');
    var sectionList = document.getElementsByTagName('section');
    for (index = 0; index < sectionList.length; index++) {
        sectionList[index].style.display = 'none';
    }
    document.getElementById('presentation').style.display = 'block';
    presentationImage.src = 'assets/img/products/' + ref;
    presentationImage.alt = title;
    presentationTitle.innerHTML = title;
    //presentationTexte.innerHTML = textPresentation;
    presentationPrice.innerHTML = price + ' euros';
    addBasketButton.setAttribute('price', price);
    addBasketButton.setAttribute('ref', ref);
    addBasketButton.setAttribute('title', title);
}
//fonction sélectionnant le thème
function selectThema(thema) {
    var categorieSelector = document.getElementsByClassName("categorieSelector");
    for (index = 0; index < categorieSelector.length; index++){
        categorieSelector[index].setAttribute('thema', thema);
    }
}
//fonction affichant la liste des produits voulus
