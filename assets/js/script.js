//fonction qui adapte la taille de la div contentPage à la taille de la page
var screenHeight = screen.availHeight;
var menuHeight = document.getElementById('topMenu').clientHeight;
var footerHeight = document.getElementById('bottomMenu').clientHeight;
document.getElementById('contentPage').style.minHeight = screenHeight - menuHeight - footerHeight + 'px';
//fonction montrant la présentation du produit sélectionné
function showPresentation(price, ref, title) {
    var textPresentation = document.getElementById(ref).innerHTML;
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
    presentationTexte.innerHTML = textPresentation;
    presentationPrice.innerHTML = price + ' euros';
    addBasketButton.setAttribute('onclick', 'addToBasket(\'' + price + '\', \'' + ref + '\', \'' + title + '\')');
}
//fonction sélectionnant le thème
function selectThema(thema) {
    var categorieSelector = document.getElementsByClassName("categorieSelector");
    document.getElementById('categorieSelector1').setAttribute('onclick', 'showProducts(\'' + thema + '\', \'DaylyObject\')');
    document.getElementById('categorieSelector2').setAttribute('onclick', 'showProducts(\'' + thema + '\', \'Accessory\')');
    document.getElementById('categorieSelector3').setAttribute('onclick', 'showProducts(\'' + thema + '\', \'Costume\')');
    document.getElementById('categorieSelector4').setAttribute('onclick', 'showProducts(\'' + thema + '\', \'Decoration\')');
    showProducts(thema, 'DaylyObject')
}
//fonction affichant la liste des produits voulus
function showProducts(thema, categorie){
    var productLists = document.getElementsByClassName('productListe');
    var selectedProductListe = document.getElementsByClassName(thema + categorie);
    var sectionList = document.getElementsByTagName('section');
    for (index = 0; index < sectionList.length; index++) {
        sectionList[index].style.display = 'none';
    }
    for (index2 = 0; index2 < productLists.length; index2++){
        productLists[index2].style.display = 'none';
    }
    for (index3 = 0; index3 < selectedProductListe.length; index3++){
        selectedProductListe[index3].style.display = 'block';
    }
    document.getElementById('productsLists').style.display = 'block';
    console.log(thema + categorie);
}