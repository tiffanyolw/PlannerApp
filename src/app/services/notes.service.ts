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

  getNotes(orderby?: string, order?: string): Observable<Note[]> {
    const orderQuery1 = orderby ? `?orderby=${orderby}` : "";
    const orderQuery2 = order ? `&order=${order}` : "";
    const orderQuery = orderby ? orderQuery1 + orderQuery2 : "";

    return this.http.get<Note[]>(`${environment.apiUrl}/notes${orderQuery}`);
  }

  addNote(body: Note): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/notes/create`, body);
  }
}
