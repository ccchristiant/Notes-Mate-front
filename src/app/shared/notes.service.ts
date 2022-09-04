import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  rootURL = "/api";

  getAll() {
    return this.http.get(this.rootURL + '/notes');
  }

  get(id: number) {
    return this.http.get(this.rootURL + `/note/${id}`);
  }

  // getId(note: any) {
    // return this.http.get(this.rootURL + '/note', note);
  // }

  add(note: Note) {
    return this.http.post(this.rootURL + '/note', note);
  }

  update(id: number, title: string, body: string) {
    return this.http.put(this.rootURL + '/note', {id, title, body});
  }

  delete(id: number) {
    return this.http.delete(this.rootURL + `/note/${id}`);
  }
}
