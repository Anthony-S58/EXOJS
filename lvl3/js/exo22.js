//Code à faire ici

let para = document.getElementById("clickOnMe");

para.addEventListener("mouseenter", function( event ) {
    // addEventListener au passage de la souris sur la div clickOnMe
    event.target.style.cursor = "pointer";
});

para.addEventListener('click', function() {
    // addEventlistener au click sur la div clickOnMe
    console.log("cliquer sur le paragraphe d'id='clickOnMe'")

});



