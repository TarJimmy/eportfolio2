import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends GlobalService {

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    getAllProjects() {
        return this.httpClient
            .get<any>(this.urlServer.concat('project/all'));
    }
}
