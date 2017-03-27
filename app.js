// Les tableaux

// Exercice 1
var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre","octobre", "novembre", "décembre"];
console.log(mois);

//Exercice 2
console.log(mois[3]);

// Exercice 3
console.log(mois[5]);

// Exercice 4
console.log(mois[10]);

// Exercice 5
 console.log(mois.splice(7, 1));
 console.log(mois.splice(7, 0, "août"));

 // Exercice 6
 for (var i = 0; i < mois.lenght; i++) {
 	console.log(mois[i]);
 }




 // Les fonctions

 // Exercice 1
function bool (a, b) {

	if (a > b) {
		return true
	} else {
		return false
	}
}