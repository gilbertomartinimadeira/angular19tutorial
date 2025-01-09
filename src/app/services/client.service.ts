import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientResponse, ClientsResponse } from '../model/class/Client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  getAllClients(): Observable<ClientsResponse> {
    return this.http.get<ClientsResponse>(environment.API_URL + 'GetAllClients');
  }

  addUpdate(obj: Client): Observable<ClientResponse> {
    return this.http.post<ClientResponse>(environment.API_URL + 'AddUpdateClient', obj);
  }

  delete(clientId: number) {
    return this.http.delete<ClientResponse>(environment.API_URL + `/DeleteClientByClientId?clientId=${clientId}`);
  }
}
