//Code à faire ici

let gras = document.getElementById("toggle");

gras.addEventListener('click', function() {
    // addEventlistener au click sur la div toggle

    if (gras.classList==0) {
        // si la div vaut 0 alors on ajoute la class toggle
        gras.classList.add('toggle');
    
    }

    else {
        // sinon elle vaut 1 alors on retire la class toggle
        gras.classList.remove('toggle');
 

}});
