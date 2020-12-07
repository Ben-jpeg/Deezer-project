// EXO 1=> 
//faire une branch 'get-title'                                                    x
// 1- Accéder et Lister les titres de chaque albums dans la console du navigateur;   x
// 2-Afficher cette liste dans votre page HTML (dans la balise 'ul').               x
// Merger la branch dans la branch master

// 1-------------------------------------
//je créer une fonction dans laquel j'ai mis a l'intérieur une fonction fléché pour chercher les tittres d'albums
// function titresAlbum() {
data.forEach((titresAlbum) => {
    console.log(titresAlbum.title);
});
// }

//----------------------------------------

// 2---------------------------------------
//J'essaie tout d'abord de selectionner et mettre en constante la balise '<ul></ul> de la page html
const ulList = document.querySelector('ul');
console.log(ulList);


// je fais une constante de la fontion qui va chercher les titres
const tmr = () => {
        data.forEach((titresAlbum) => {
            ulList.insertAdjacentHTML('beforeend', `<li>${titresAlbum.title}</li>`);
            //J'y ai ajouté entre les <li> le nom de ma fontion + la clé que je veux chercher
        });
    }
    // et là j'appelle ma fonction
tmr();
//---------------------------------------FIN EXO 1


// EXO 2=> 
//faire une branch 'get-img'
// Lister les images de chaque album au format medium
// Afficher les images et les titres correspondant dans votre page HTML.

// mettre dans une boucle les images d'albums
data.forEach((medImg) => {
    console.log(medImg.cover_medium);
});

//puis je veux mettre ces images dans ma div, donc je vais aller chercher cette div dans le html
const imgClass = document.querySelector('.album-list')
console.log(imgClass);

// ensuite je mets ca dans une constante comme l'exercice précédent
const displayImg = () => {
    data.forEach((medImg) => {
        imgClass.insertAdjacentHTML('beforebegin', `<img src=${medImg.cover_medium}>`);
    })
};

// et j'affiche les images
displayImg();

// -------------------------------- FIN EXO 2