import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { formations } from '../list-load/formations-load';
import { sessions } from '../list-load/sessions-load';
import { candidats } from '../list-load/candidats-load';
import { formateurs } from '../list-load/formateurs-load';
import { Iformation } from '../interface/iformation';
import { Isession } from '../interface/isession';
import { Icandidat } from '../interface/icandidat';
import { Iformateur } from '../interface/iformateur';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private Categories: string[] = [
    'Programmation',
    'Développement Web',
    'Bases de données',
    'Cybersécurité',
    'Réseaux',
    'Intelligence Artificielle',
    'Développement Mobile'
  ];

  private Niveaux: string[] = [
    'Débutant',
    'Intermédiaire',
    'Avancé'
  ];

  private _candidats: Icandidat[] = [...candidats];
  private _formations: Iformation[] = [...formations];
  private _sessions: Isession[] = [...sessions];
  private _formateurs: Iformateur[] = [...formateurs  ];

  candidatsChanged = new Subject<Icandidat[]>();
  formationsChanged = new Subject<Iformation[]>();
  sessionsChanged = new Subject<Isession[]>();
  formateursChanged = new Subject<Iformateur[]>();

  getCategories(): string[] {
    return [...this.Categories];
  }

  getNiveaux(): string[] {
    return [...this.Niveaux];
  }

  getCandidats(): Icandidat[]{
    return [...this._candidats];
  }

  getCandidatById(id: number): Icandidat | undefined {
    return this._candidats.find(c => c.id === id);
  }

  getlastCandidatId(): number{
    return this._candidats[this._candidats.length - 1].id;
  }

  getNbCandidats(): number {
    return this._candidats.length;
  }

  addCandidat(candidat: Icandidat){
    this._candidats = [...this._candidats, candidat];
    this.candidatsChanged.next([...this._candidats]);
  }

  updateCandidat(candidat: Icandidat){
    this._candidats = this._candidats.map(c => c.id === candidat.id ? candidat : c);
    this.candidatsChanged.next([...this._candidats]);
  }

  deleteCandidat(id: number){
    this._candidats = this._candidats.filter(c => c.id !== id);
    this.candidatsChanged.next([...this._candidats]);
  }

  getFormations(): Iformation[] {
    return [...this._formations];
  }

  getFormationById(id: number): Iformation | undefined {
    return this._formations.find(f => f.id === id);
  }

  getlastFormationId(): number{
    return this._formations[this._formations.length - 1].id;
  }

  getNbFormations(): number {
    return this._formations.length;
  }

  addFormation(formation: Iformation){
    this._formations = [...this._formations, formation];
    this.formationsChanged.next([...this._formations]);
  }

  updateFormation(formation: Iformation){
    this._formations = this._formations.map(f => f.id === formation.id ? formation : f);
    this.formationsChanged.next([...this._formations]);
  }

  deleteFormation(id: number){
    this._formations = this._formations.filter(f => f.id !== id);
    this.formationsChanged.next([...this._formations]);
  }

  getSessions(): Isession[] {
    return [...this._sessions];
  }

  getSessionById(id: number): Isession | undefined {
    return this._sessions.find(s => s.id === id);
  }

  getSessionsByFormationId(idFormation: number): Isession[] {
    return this._sessions.filter(s => s.formation.id === idFormation);
  }

  getlastSessionId(): number{
    return this._sessions[this._sessions.length - 1].id;
  }

  getNbSessions(): number {
    return this._sessions.length;
  }

  addSession(session: Isession){
    this._sessions = [...this._sessions, session];
    this.sessionsChanged.next([...this._sessions]);
  }

  updateSession(session: Isession){
    this._sessions = this._sessions.map(s => s.id === session.id ? session : s);
    this.sessionsChanged.next([...this._sessions]);
  }

  deleteSession(id: number){
    this._sessions = this._sessions.filter(s => s.id !== id);
    this.sessionsChanged.next([...this._sessions]);
  }

  getFormateurs(): Iformateur[] {
    return [...this._formateurs];
  }

  getFormateurById(id: number): Iformateur | undefined {
    return this._formateurs.find(f => f.id === id);
  }

  getlastFormateurId(): number{
    return this._formateurs[this._formateurs.length - 1].id;
  }

  getNbFormateurs(): number {
    return this._formateurs.length;
  }

  addFormateur(formateur: Iformateur){
    this._formateurs = [...this._formateurs, formateur];
    this.formateursChanged.next([...this._formateurs]);
  }

  updateFormateur(formateur: Iformateur){
    this._formateurs = this._formateurs.map(f => f.id === formateur.id ? formateur : f);
    this.formateursChanged.next([...this._formateurs]);
  }

  deleteFormateur(id: number){
    this._formateurs = this._formateurs.filter(f => f.id !== id);
    this.formateursChanged.next([...this._formateurs]);

    this._sessions = this._sessions.map(s => ({...s,formateurs: s.formateurs.filter(f => f.id !== id)}));
    this.sessionsChanged.next([...this._sessions]);
  }
  
}