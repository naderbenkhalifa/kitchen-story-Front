/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root',
})
class CustomersService extends __BaseService {
  static readonly findAllPath = '/kitchenstory/v1/customers/all';
  static readonly savePath = '/kitchenstory/v1/customers/create';
  static readonly findByEmailPath = '/kitchenstory/v1/customers/{email}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des customers
   *
   * Cette methode permet de chercher et renvoyer la liste des clients qui existent dans la BDD
   * @return La liste des clients / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<Customer>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/kitchenstory/v1/customers/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Customer>>;
      })
    );
  }
  /**
   * Renvoi la liste des customers
   *
   * Cette methode permet de chercher et renvoyer la liste des clients qui existent dans la BDD
   * @return La liste des clients / Une liste vide
   */
  findAll(): __Observable<Array<Customer>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Customer>)
    );
  }

  /**
   * Enregistrer un customer
   *
   * Cette methode permet d'enregistrer ou modifier un customer
   * @param body undefined
   * @return L'objet customer cree / modifie
   */
  saveResponse(body?: Customer): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/kitchenstory/v1/customers/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * Enregistrer un customer
   *
   * Cette methode permet d'enregistrer ou modifier un customer
   * @param body undefined
   * @return L'objet customer cree / modifie
   */
  save(body?: Customer): __Observable<Customer> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * Rechercher un customer par ID
   *
   * Cette methode permet de chercher un customers par son email
   * @param email undefined
   * @return Le customer a ete trouve dans la BDD
   */
  findByEmailResponse(email: string): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/kitchenstory/v1/customers/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * Rechercher un customer par ID
   *
   * Cette methode permet de chercher un customers par son email
   * @param email undefined
   * @return Le customer a ete trouve dans la BDD
   */
  findByEmail(email: string): __Observable<Customer> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as Customer)
    );
  }
}

module CustomersService {
}

export { CustomersService }
