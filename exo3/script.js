"use strict"; // (slide 12) Active le mode strict pour de bonnes pratiques

// Fonction B (slide 30) : prend une note (float) et retourne un booléen (slide 31)
function B(note) {
    // Si la note est >= 10 → admis (true), sinon ajourné (false) (slide 18)
    return note >= 10.0; // true ou false (slide 17)
}

// Fonction A (slide 33) : appelle B() et affiche les résultats
function A() {
    // Tableau d'objets Students (slides 38-40)
    let students = [
        { matricule: 1000, nom: "JOHN", prenom: "DOE", note: 14, rang: 5 },
        { matricule: 2000, nom: "BOB", prenom: "CARLTON", note: 7, rang: 1 },
        { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, rang: 3 }
    ];

    // Boucle for...of (slide 44) pour parcourir le tableau
    for (let etu of students) {
        // Condition (slide 22)
        if (B(etu.note)) {
            console.log(etu.matricule + " : ADMIS"); // (slide 20) concaténation
        } else {
            console.log(etu.matricule + " : AJOURNÉ");
        }
    }
}

// Alias pour appeler la fonction A
function deliberation() {
    A();
}
