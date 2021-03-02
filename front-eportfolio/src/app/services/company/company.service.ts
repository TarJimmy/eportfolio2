import { Injectable } from '@angular/core';
import { GlobalService } from "../global.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends GlobalService{

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    getAllCompany() {
        return this.httpClient
            .get<any>(this.urlServer.concat('all'));
    }

    getCompanyById(companyId: string) {
        return this.httpClient
            .get<any>(this.urlServer.concat('company/details/' + companyId));
    }
}
