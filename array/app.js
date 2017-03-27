var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

// Exercice 8
array.push("Courgette");
console.log(array);

/* Exercice 9
array.splice(4, 0, "Citron");
console.log(array);*/

// Correction exo 9
array[4].push("Citron");
console.log("Citron");

// Exercice 10
array.splice(1, 1);
console.log(array);

// Exercice 11
array.splice(2, 0, "Poire");
console.log(array);