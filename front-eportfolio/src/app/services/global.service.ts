import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    protected urlServer = window.origin + ':3000/';

    constructor(protected http: HttpClient) {}
}
