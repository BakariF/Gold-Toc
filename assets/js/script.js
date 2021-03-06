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
    item.setAttribute('id', '#' + ref);
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
    item.appendChild(qtyContainer);
    //création du bouton moins
    var lessButton = document.createElement('button');
    lessButton.setAttribute('onclick', 'setItemQty(\'qty#' + ref + '\', -1)');
    lessButton.innerHTML = '-';
    qtyContainer.appendChild(lessButton);
    //création du paragraphe quantité
    var qtyValue = document.createElement('p');
    qtyValue.setAttribute('class', 'qtyValue');
    qtyValue.setAttribute('id', 'qty#'+ ref);
    qtyValue.innerHTML = 1;
    qtyContainer.appendChild(qtyValue);
    //création du bouton plus
    var moreButton = document.createElement('button');
    moreButton.setAttribute('onclick', 'setItemQty(\'qty#' + ref + '\', 1)');
    moreButton.innerHTML = '+';
    qtyContainer.appendChild(moreButton);
    //création de la colonne prix
    var priceContainer = document.createElement('td');
    priceContainer.setAttribute('class', 'priceContainer');
    priceContainer.innerHTML = price;
    item.appendChild(priceContainer);
    //création de la colonne pour le bouton supprimer
    var removeButtonConteneur = document.createElement('td');
    removeButtonConteneur.setAttribute('class', 'removeButtonConteneur');
    item.appendChild(removeButtonConteneur);
    //création du bouton supprimer
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'removeButton');
    removeButton.setAttribute('onclick', 'removeItem(\'#' + ref + '\')');
    removeButton.innerHTML = 'Supprimer l\'article';
    removeButtonConteneur.appendChild(removeButton); 
}
//fonction calculant le total du panier
function calculTotal() {
var priceListe = document.getElementsByClassName('priceContainer');
var qtyValueListe = document.getElementsByClassName('qtyValue')
var total = document.getElementById('total');
var price = 0;
for (index = 0; index < priceListe.length; index++) {
    price += Number(priceListe[index].innerHTML) * Number(qtyValueListe[index].innerHTML);
    console.log(price);
}
total.innerHTML = price + ' euros TTC';
}
//fonction permettant de supprimer un article du panier
function removeItem(ref) {
    document.getElementById(ref).remove();
    calculTotal();
}
//fonction permettant de changer la quantité
function setItemQty(item, value) {
  var qtyValue = Number(document.getElementById(item).innerHTML);
  console.log(qtyValue);
  if (qtyValue == 1 && value == -1) {
  }else {
    document.getElementById(item).innerHTML = qtyValue + Number(value);
  }
  calculTotal();
}