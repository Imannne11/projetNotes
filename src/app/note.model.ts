export class Note {
    id: number;
    titre: string;
    contenu: string;
    date: Date;
    couleur: string;
    tags: string[];  // Utilisation d'un tableau de chaînes pour les tags
    type: 'texte' | 'checklist'; // Le type de la note peut être 'texte' ou 'checklist'
  
    constructor(
      id: number,
      titre: string,
      contenu: string,
      date: Date,
      couleur: string = '#ffffff',
      tags: string[] = [],
      type: 'texte' | 'checklist' = 'texte'
    ) {
      this.id = id;
      this.titre = titre;
      this.contenu = contenu;
      this.date = date;
      this.couleur = couleur;
      this.tags = tags;
      this.type = type;
    }
  }
  