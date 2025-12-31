export interface Iformation {
    id: number;
    titre: string;
    description: string;
    chargeHoraire: number;
    programmePdf: string;
    niveau: 'Débutant' | 'Intermédiaire' | 'Avancé';
    tags: string[];
    categories: string[];
}