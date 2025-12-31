import { Icandidat } from "./icandidat";
import { Iformateur } from "./iformateur";
import { Iformation } from "./iformation";

export interface Isession {
    id: number;
    formation: Iformation;
    formateurs: Iformateur[];
    candidats: Icandidat[];
    dateDebut: string;
    dateFin: string;
    description: string;
    complet:boolean;
}
