import { Tag } from './tag';  // Import du type Tag

export class Note {
  id: number;
  titre: string;
  contenu: string;
  date: Date;
  couleur: string;
  tags: Tag[];  // tableau d'objets de type Tag
  type: 'texte' | 'checklist'; // Le type de la note peut être 'texte' ou 'checklist'

  constructor(
    id: number,
    titre: string,
    contenu: string,
    date: Date,
    couleur: string = '#ffffff',
    tags: Tag[] = [], 
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
