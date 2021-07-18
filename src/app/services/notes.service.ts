import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiUrl}/notes`);
  }

  addNote(body: Note): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/notes/create`, body);
  }
}
