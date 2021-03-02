import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService extends GlobalService {

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    getAllFormation() {
        return this.httpClient
            .get<any>(this.urlServer.concat('formations/all'));
    }
}
