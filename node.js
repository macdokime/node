const fs = require('fs').promises;
const chemin = 'data.txt';
const defaut = 'voici la page de la console du ficher data.txt';

async function lireData() {
  try {
    const contenu = await fs.readFile(chemin, 'utf-8');
    console.log('Contenu :\n', contenu);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(chemin, defaut);
      console.log('Créé :\n', defaut);
    } else console.error(' Erreur :', err.message);
  }
}

lireData();
