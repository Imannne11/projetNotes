import { Tag } from "./tag";

export class Note {
  id: number;
  titre: string;
  contenu?: string; // 'contenu' est optionnel
  date: Date;
  couleur: string;
  tags: Tag[];
  type: 'texte' | 'checklist';
  checklist: Array<{ content: string, checked: boolean }>; // Liste des éléments de la checklist

  constructor(
    id: number,
    titre: string,
    date: Date,
    couleur: string = '#ffffff',
    tags: Tag[] = [],
    type: 'texte' | 'checklist' = 'texte',
    checklist: { content: string; checked: boolean }[] = [] // Initialiser la checklist vide
  ) {
    this.id = id;
    this.titre = titre;
    this.date = date;
    this.couleur = couleur;
    this.tags = tags;
    this.type = type;
    this.checklist = checklist; // Initialisation de la checklist

    // Si le type est 'texte', initialiser 'contenu'
    if (type === 'texte') {
      this.contenu = ''; // Initialise 'contenu' si le type est 'texte'
    } else {
      this.contenu = undefined; // Si ce n'est pas 'texte', 'contenu' n'est pas défini
    }
  }
}
