# ⚽KickOff - Application mobile pour suivre les matchs de football en direct

![React Native](https://img.shields.io/badge/React%20Native-v0.64-blue)
![Redux](https://img.shields.io/badge/Redux-v4.1.0-purple)
![Expo](https://img.shields.io/badge/Expo-v44.0.0-green)
![Jest](https://img.shields.io/badge/Jest-v27.0.6-red)
![Docker](https://img.shields.io/badge/Docker-v20.10.8-blue)

<div align="center">
  <img src="https://i.postimg.cc/H8DKfkd3/vecteezy-kick-off-football-typography-t-shirt-print-free-vector.png" alt="KickOff Logo">
</div>

⚽ KickOff est une application mobile développée avec React Native Expo qui permet aux utilisateurs de visualiser les matchs de football en direct. Les utilisateurs peuvent suivre leurs équipes et joueurs préférés, obtenir des mises à jour en temps réel sur les scores des matchs et consulter les statistiques détaillées des joueurs. L'application offre une expérience complète aux passionnés de football pour rester connectés avec l'action des matchs les plus récents.

---

- 📱 Affichage des matchs en direct et des matchs passés
- 📊 Visualisation des détails des matchs (équipes, date, heure, ligues, etc.)
- 🔍 Recherche de joueurs par nom
- 🌟 Sauvegarde des matchs favoris

---

## 🛠️Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/HamzaHarrass/KickOff.git
```
## 🚀Installez les dépendances :
```bash
cd KickOff
npm install
```
Lancez l'application :
```bash
npm start
```
## 📂 Structure du Projet

- 📁 .expo: Configuration spécifique à Expo.
- 📁 .idea: Configuration spécifique à l'IDE (par exemple, IntelliJ IDEA).
- 📁 assets 🌟: Fichiers multimédias, tels que des images, utilisés dans l'application.
- 📁 node_modules 📦: Les modules npm installés.
- 📁 reducers 🔄: Les fichiers de réduction Redux pour gérer l'état de l'application.
  - 📄 matchesReducer.js 📈: Réducteur pour les données des matchs.
  - 📄 equipeReducer.js 🛡️: Réducteur pour les données des équipes.
- 📁 screens 📱: Les composants d'écran de l'application.
  - 📄 HomeScreens.js 🏠: Écran d'accueil de l'application.
  - 📄 MatchesScreen.js ⚽: Écran pour afficher les matchs en direct et passés.
  - 📄 MatchDetailsScreens.js ℹ️: Écran pour afficher les détails d'un match.
  - 📄 EquipesScreens.js 🏟️: Écran pour afficher les équipes.
  - 📄 PlayerScreen.js 🧑‍🤝‍🧑: Écran pour afficher les joueurs.
  - 📄 PlayerDetailsScreen.js 🧑‍🎓: Écran pour afficher les détails d'un joueur.
- 📁 utils 🛠️: Fonctions utilitaires utilisées dans l'application.
  - 📄 functions.js 🔧: Fonctions utilitaires diverses.
- 📄 .gitignore 🚫: Liste des fichiers et dossiers ignorés par Git.
- 📄 App.js 🚀: Point d'entrée de l'application.
- 📄 app.json 📱: Configuration de l'application Expo.
- 📄 babel.config.js 🛠️: Configuration Babel.
- 📄 package-lock.json 🔒: Verrouillage des dépendances du package npm.
- 📄 package.json 📦: Configuration du package npm.
- 📄 README.md ℹ️: Documentation du projet (ce fichier).
- 📄 store.js 🗄️: Configuration du store Redux.

---
## ✅Tests
- Les tests de cette application sont réalisés avec Jest et Jest-Expo. Au moins deux composants sont soumis à des tests.
  
## 🔄Gestion de l'état
- Redux est utilisé pour gérer l'état de l'application.

## 🐳Docker
- L'application est dockerisée pour une installation facile.

## 📡API
- L'API utilisée pour les matchs de football est fournie par SportMonks. Pour y accéder, veuillez créer un compte et obtenir un jeton d'accès sur SportMonks.
---
## Happy coding! 🚀
```vbnet
Cette mise en forme utilise des séparateurs horizontaux pour délimiter les sections, des blocs de code avec coloration syntaxique, des listes à puces pour les fonctionnalités, et des liens cliquables pour l'API SportMonks et les commandes d'installation. Vous pouvez personnaliser davantage en ajoutant des images, des captures d'écran, des vidéos, ou tout autre élément visuel qui pourrait être pertinent pour votre projet.
```
```vbnet
In this updated version, I've added icons to each section title using emojis for simplicity and clarity. You can adjust the emojis or FontAwesome icons as needed to fit your project's style and theme. This should help make each section stand out and be easily recognizable.
```

