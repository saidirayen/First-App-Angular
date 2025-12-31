import { Isession } from "../interface/isession";
import { formations } from "./formations-load";
import { formateurs } from "./formateurs-load";
import { candidats } from "./candidats-load";

export const sessions: Isession[] = [
    {
        id: 1,
        formation: formations[0],
        formateurs: [formateurs[0]],
        candidats: [candidats[0],candidats[1],candidats[2],candidats[3],candidats[4],candidats[5],candidats[6],candidats[7]],
        dateDebut: "2026-01-10",
        dateFin: "2026-01-15",
        description: "Session Java 1",
        complet: false
    },
    {
        id: 2,
        formation: formations[0],
        formateurs: [formateurs[0], formateurs[1]],
        candidats: [candidats[2]],
        dateDebut: "2026-01-16",
        dateFin: "2026-01-21",
        description: "Session Java 2",
        complet: false
    },
    {
        id: 3,
        formation: formations[1],
        formateurs: [formateurs[1]],
        candidats: [candidats[0]],
        dateDebut: "2026-02-01",
        dateFin: "2026-02-07",
        description: "Session Spring Boot 1",
        complet: false
    },
    {
        id: 4,
        formation: formations[1],
        formateurs: [formateurs[1], formateurs[3]],
        candidats: [candidats[3]],
        dateDebut: "2026-02-08",
        dateFin: "2026-02-14",
        description: "Session Spring Boot 2",
        complet: false
    },
    {
        id: 5,
        formation: formations[2],
        formateurs: [formateurs[1]],
        candidats: [candidats[1], candidats[4]],
        dateDebut: "2026-03-01",
        dateFin: "2026-03-08",
        description: "Session Angular 1",
        complet: false
    },
    {
        id: 6,
        formation: formations[2],
        formateurs: [formateurs[1], formateurs[3]],
        candidats: [candidats[0]],
        dateDebut: "2026-03-09",
        dateFin: "2026-03-16",
        description: "Session Angular 2",
        complet: false
    },
    {
        id: 7,
        formation: formations[3],
        formateurs: [formateurs[3]],
        candidats: [candidats[2]],
        dateDebut: "2026-03-17",
        dateFin: "2026-03-22",
        description: "Session React 1",
        complet: false
    },
    {
        id: 8,
        formation: formations[3],
        formateurs: [formateurs[3]],
        candidats: [candidats[5]],
        dateDebut: "2026-03-23",
        dateFin: "2026-03-28",
        description: "Session React 2",
        complet: false
    },
    {
        id: 9,
        formation: formations[4],
        formateurs: [formateurs[3]],
        candidats: [candidats[0]],
        dateDebut: "2026-04-01",
        dateFin: "2026-04-06",
        description: "Session SQL 1",
        complet: false
    },
    {
        id: 10,
        formation: formations[4],
        formateurs: [formateurs[3], formateurs[0]],
        candidats: [candidats[6]],
        dateDebut: "2026-04-07",
        dateFin: "2026-04-12",
        description: "Session SQL 2",
        complet: false
    },
    {
        id: 11,
        formation: formations[5],
        formateurs: [formateurs[2]],
        candidats: [candidats[3]],
        dateDebut: "2026-04-13",
        dateFin: "2026-04-18",
        description: "Session Cybersécurité 1",
        complet: false
    },
    {
        id: 12,
        formation: formations[5],
        formateurs: [formateurs[2], formateurs[4]],
        candidats: [candidats[4],candidats[7]],
        dateDebut: "2026-04-19",
        dateFin: "2026-04-24",
        description: "Session Cybersécurité 2",
        complet: false
    },
    {
        id: 13,
        formation: formations[6],
        formateurs: [formateurs[4]],
        candidats: [candidats[1]],
        dateDebut: "2026-05-01",
        dateFin: "2026-05-06",
        description: "Session Réseaux 1",
        complet: false
    },
    {
        id: 14,
        formation: formations[6],
        formateurs: [formateurs[4], formateurs[0]],
        candidats: [candidats[2]],
        dateDebut: "2026-05-07",
        dateFin: "2026-05-12",
        description: "Session Réseaux 2",
        complet: false
    },
    {
        id: 15,
        formation: formations[7],
        formateurs: [formateurs[2]],
        candidats: [candidats[4]],
        dateDebut: "2026-05-13",
        dateFin: "2026-05-18",
        description: "Session IA 1",
        complet: false
    },
    {
        id: 16,
        formation: formations[7],
        formateurs: [formateurs[2]],
        candidats: [candidats[6],candidats[7]],
        dateDebut: "2026-05-19",
        dateFin: "2026-05-24",
        description: "Session IA 2",
        complet: false
    },
    {
        id: 17,
        formation: formations[8],
        formateurs: [formateurs[5]],
        candidats: [],
        dateDebut: "2026-06-01",
        dateFin: "2026-06-07",
        description: "Session Flutter 1",
        complet: false
    },
    {
        id: 18,
        formation: formations[8],
        formateurs: [formateurs[5]],
        candidats: [candidats[3]],
        dateDebut: "2026-06-08",
        dateFin: "2026-06-14",
        description: "Session Flutter 2",
        complet: false
    },
    {
        id: 19,
        formation: formations[9],
        formateurs: [formateurs[3]],
        candidats: [candidats[4],candidats[6]],
        dateDebut: "2026-06-15",
        dateFin: "2026-06-20",
        description: "Session MySQL 1",
        complet: false
    },
    {
        id: 20,
        formation: formations[9],
        formateurs: [formateurs[3]],
        candidats: [],
        dateDebut: "2026-06-21",
        dateFin: "2026-06-26",
        description: "Session MySQL 2",
        complet: false
    },
    {
        id: 21,
        formation: formations[10],
        formateurs: [formateurs[2], formateurs[4]],
        candidats: [],
        dateDebut: "2026-07-01",
        dateFin: "2026-07-07",
        description: "Session Sécurité Réseaux 1",
        complet: false
    },
    {
        id: 22,
        formation: formations[10],
        formateurs: [formateurs[2]],
        candidats: [candidats[0]],
        dateDebut: "2026-07-08",
        dateFin: "2026-07-14",
        description: "Session Sécurité Réseaux 2",
        complet: false
    },
    {
        id: 23,
        formation: formations[11],
        formateurs: [formateurs[0]],
        candidats: [candidats[0],candidats[5],candidats[6]],
        dateDebut: "2026-07-15",
        dateFin: "2026-07-21",
        description: "Session Python 1",
        complet: false
    },
    {
        id: 24,
        formation: formations[11],
        formateurs: [formateurs[0], formateurs[1]],
        candidats: [],
        dateDebut: "2026-07-22",
        dateFin: "2026-07-29",
        description: "Session Python 2",
        complet: false
    }
];
