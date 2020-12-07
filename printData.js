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