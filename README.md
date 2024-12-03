# Marvel App

## Description
Marvel App est une application qui permet aux utilisateurs de consulter des informations sur leurs super-héros Marvel préférés. L'application fournit des détails sur les personnages, les bandes dessinées, les séries et bien plus encore.

## Fonctionnalités
- Recherche de personnages Marvel
- Affichage des détails des personnages
- Consultation des bandes dessinées et séries associées
- Ajout de personnages aux favoris

## Installation
1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/marvel-app.git
    ```
2. Accédez au répertoire du projet :
    ```bash
    cd marvel-app
    ```
3. Installez les dépendances :
    ```bash
    npm install
    ```

## Utilisation
1. Lancez l'application :
    ```bash
    npm start
    ```
2. Ouvrez votre navigateur et accédez à `http://localhost:5173/`.

## Composants Principaux

### Characters
Affiche la liste des personnages Marvel avec des options de tri et d'ordre.

### CharacterDetail
Affiche les détails d'un personnage, y compris ses capacités et sa date de modification.

### CompareCharactersPage
Permet de comparer les capacités de deux personnages.

### D3PieChart
Affiche un graphique en anneau des capacités d'un personnage en utilisant D3.js.

### RechartsPieChart
Affiche un graphique en anneau des capacités d'un personnage en utilisant Recharts.

### Tests
Les tests unitaires sont écrits en utilisant @testing-library/react et jest. Pour exécuter les tests, utilisez la commande suivante :
    ```bash
    npm test
    ```
### Couverture des tests
Pour visualiser la couverture des tests, utilisez la commande suivante :
    ```bash
    npm run test:coverage
    ```

## Contribuer
Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer :
1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Poussez vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request vers la branche develop.

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteurs
- **Thibault DAGUIN** - *Développeur principal* - [Mon Profil GitHub](https://github.com/ThibaultDAGUIN/)

## Remerciements
- Merci à Alexandre GIRARD - Intervenant en 3e année du BUT SD - qui nous a initié au développement d'application pour le web
- Merci au BUT SD de Niort
- Merci à mes collègues et à tous les contributeurs du projet.

