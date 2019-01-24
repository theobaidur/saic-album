import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private root_url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  public getPhotoList() {
    return this.http.get(this.root_url);
  }

  public getPhotoDetails(id: number) {
    const url = this.root_url + '/' + id;
    return this.http.get(url);
  }
}
