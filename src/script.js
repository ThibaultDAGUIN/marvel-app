async function getCharacters() {
    try {
        const response = await fetch('http://127.0.0.1:5500/src/data/characters.json');
        if (!response.ok) {
            if(response.status === 404)
                throw new Error("404 - Professeur Xavier pas content");
            else
                throw new Error("Appel à la base JSON ne marche pas");
        }
        const data = await response.json();
        console.log(data); // Affiche les données dans la console

        // Afficher les noms du JSON en li (à la place du html)
        // Récupérer l'élément ul avec l'ID "characters"
        const charactersList = document.getElementById('characters');
        // Parcourir les données et créer un élément li pour chaque personnage
        data.forEach(character => {
            const li = document.createElement('li');
            li.textContent = character.name; // Assurez-vous que les objets dans le JSON ont un attribut 'name'
            charactersList.appendChild(li);
        });
  
    } catch (error) {
      console.error('Erreur:', error);
    }
}
  
  // Appeler la fonction pour récupérer et afficher les données
getCharacters();
