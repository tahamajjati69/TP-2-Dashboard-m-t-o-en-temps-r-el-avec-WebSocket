# 🌦️ Dashboard Météo Temps Réel (Node.js + WebSockets)

Ce projet est un tableau de bord météo dynamique qui affiche des données provenant d'un fichier CSV. Les données sont envoyées en "streaming" via un serveur WebSocket vers une interface web interactive.

## 🚀 Fonctionnalités
- **Serveur Node.js** : Lit un fichier CSV et convertit les lignes en JSON.
- **WebSocket (ws)** : Envoie une nouvelle donnée toutes les 3 secondes sans rechargement de page.
- **Visualisation de données** : 
    - Graphique linéaire pour les températures (Max/Min) avec **Chart.js**.
    - Graphique à barres pour la pluviométrie.
    - Tableau HTML mis à jour dynamiquement.

---

## 🛠️ Installation et Lancement

1. **Cloner ou créer le dossier du projet**
   ```bash
   mkdir meteo-realtime
   cd meteo-realtime
    ```
   
2. Initialiser le projet et installer les dépendances
   ```bash
   npm init -y
   npm install ws csvtojson
   ```
3. Lancer le serveur
   ~~~~bash
   node app2.js
   # Ou avec nodemon pour le développement
   npx nodemon app2.js
   ~~~~

## 📊 Aperçu du Projet:
1. Interface Globale <br>
   Visualisation en temps réel des courbes de température et de l'histogramme de pluie.
   <img width="1912" height="911" alt="image" src="https://github.com/user-attachments/assets/07953c8e-9cf2-4764-b01e-48609911deae" />
2. Flux de données (Console Serveur): <br>
   Affichage des connexions clients et du processus de streaming dans le terminal.
   <img width="1820" height="650" alt="image" src="https://github.com/user-attachments/assets/1f869a41-94da-495f-9899-ac943cd4cdce" />
## 🎥 Démonstration Vidéo:


https://github.com/user-attachments/assets/8269b672-f112-4f37-b05a-3c3994119433

---

## ✍️ Auteur
**Majjati Mohamed Taha**
- Étudiant en [info s6 / ENS]
---
