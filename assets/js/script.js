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
function selectThema(thema, categorie) {
    document.getElementById('DaylyObject').setAttribute('onclick', 'showProducts(\'' + thema + '\', id)');
    document.getElementById('Accessory').setAttribute('onclick', 'showProducts(\'' + thema + '\', id)');
    document.getElementById('Costume').setAttribute('onclick', 'showProducts(\'' + thema + '\', id)');
    document.getElementById('Decoration').setAttribute('onclick', 'showProducts(\'' + thema + '\', id)');
    showProducts(thema, categorie)
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
    document.getElementById('gold').setAttribute('onclick', 'selectThema(id, \'' + categorie + '\')');
    document.getElementById('bucks').setAttribute('onclick', 'selectThema(id, \'' + categorie + '\')');
}
//fonction ajouter au panier
function addToBasket(price, ref, title) {
    var itemContainer = document.getElementById('itemContainer');
    //création de la ligne pour le produit
    var item = document.createElement('tr');
    item.setAttribute('class', 'itemContainer');
    item.setAttribute('id', ref);
    itemContainer.appendChild(item);
    //création de la colone pour l'image
    var imageContainer = document.createElement('td');
    imageContainer.setAttribute('class', 'imageContainer');
    item.appendChild(imageContainer);
    //création de l'image
    var image = document.createElement('img');
    image.src = 'assets/img/products/' + ref;
    imageContainer.appendChild(image);
    //création de la colonne nom
    var nameContainer = document.createElement('td');
    nameContainer.setAttribute('class', 'nameContainer');
    nameContainer.innerHTML = title;
    item.appendChild(nameContainer);
    //création de la colonne quantité
    var qtyContainer = document.createElement('td');
    qtyContainer.setAttribute('class', 'qtyContainer');
    qtyContainer.innerHTML = 1;
    item.appendChild(qtyContainer);
    //création de la colonne prix
    var priceContainer = document.createElement('td');
    priceContainer.setAttribute('class', 'priceContainer');
    priceContainer.innerHTML = price;
    item.appendChild(priceContainer);
}
//fonction calculant le total du panier
function calculTotal() {
var priceListe = document.getElementsByClassName('priceContainer');
var total = document.getElementById('total');
var price = 0;
for (index = 0; index < priceListe.length; index++) {
    price += Number(priceListe[index].innerHTML);
    console.log(price);
}
total.innerHTML = price + ' euros TTC';
}