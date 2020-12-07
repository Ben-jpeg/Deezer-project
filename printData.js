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