// Les tableaux

// Exercice 1
var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre","octobre", "novembre", "décembre"];
console.log(mois);

//Exercice 2
console.log(mois[2]);

// Exercice 3
console.log(mois[5]);

// Exercice 4
console.log(mois[10]);

// Exercice 5
 console.log(mois.splice(7, 1));

 console.log(mois.splice(7, 0, "août"));

// Correction
mois[7] = "août";
console.log(mois);

 // Exercice 6
 for (var i = 0; i < mois.lenght; i++) {
 	console.log(mois[i]);
 }




 // Les fonctions

 /* Exercice 1
function bool (a, b) {

	if (a > b) {
		return true
	} else {
		return false
	}
}

var result = bool(67, 23);
console.log(result);*/

// Correction exo 1
function returnTrue() {
	return true;
}
console.log(returnTrue);

/* Exercice 2
function chaine(string) {
	return string;
}
var mot = chaine("Hello");
console.log(mot);*/

// Corection exo 2
function returnString(string) {
	return string; 
}
console.log(returnString("Hello"));


/* Exercice 3
function foo(string, chaine) {
	return string + " " + chaine;
}
var afficher = foo("Hello", "World");
console.log(afficher);*/

// Correction exo 3
function concaString(string, charact) {
	return string + charact;
}
console.log(concaString("Salut",  "yop"));

//Exercice 4
function nombre(a, b) {
	if(a > b) {
		return "Le premier nombre est plus grand!";
	} else if (a < b) {
		return "Le premier nombre est plus petit!";
	} else {
		return "Les deux nombres sont identiques!";
	}
}
/*var resultat = nombre(78, 34);
console.log(resultat);*/

// Correction exo 4
console.log(nombre(10, 50));
console.log(nombre(50, 10));
console.log(nombre(10, "10"));

/* Exercice 5
function conca(c, mot) {
	return c + " " + mot;
}
var phrase = conca(2, "hellos");
console.log(phrase);*/

// Correction exo 5
function conca(number, string) {
	return number + " " + string;
}
console.log(conca(5, "Salut, comment ça va?"));

/* Exercice 6
function bienvenue(nom, prenom, age) {
	return "Bonjour" + nom + prenom + ",tu as" + age + "ans.";
}
var identité = ("Dupont", "Jean", 32);
console.log(identité);*/

// Correction exo 6
function presentation(nom, prenom,age) {
	return "Bonjour" + nom + prenom + ",tu as" + age + "ans.";
}
console.log(presentation("Dupont", "Jean", 32));

// Correction exo 7
function whoAreYou(age, genre) {
	age = age > 18 ? "majeur" : "mineur";
	return genre === "homme" ? "Vous êtes un homme" : "Vous êtes une femme";
}
console.log(whoAreYou(19, "homme"));
console.log(whoAreYou(17,"femme"));
console.log(whoAreYou(15, "homme"));
console.log(whoAreYou(26, "femme"));

