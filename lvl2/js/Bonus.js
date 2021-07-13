const check = document.getElementById("check") ;
check.addEventListener("click", function() {
 let year = document.getElementById("year").value ;
 // Votre code ici

if (((year%4==0) && (year%100!=0)) || (year%400==0)) {console.log('année bisextile')

} else {console.log('année non bisextile')}

});

