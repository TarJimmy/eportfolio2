import { Injectable } from '@angular/core';
import { GlobalService } from "../global.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ExperienceProService extends GlobalService {
    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }
    getAllExperiencePro() {
        return this.httpClient
            .get<any>(this.urlServer.concat('experiencePro/all?'));
    }
}
