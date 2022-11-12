/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
class ProductsService extends __BaseService {
  static readonly findAllPath = '/kitchenstory/v1/products/all';
  static readonly savePath = '/kitchenstory/v1/products/create';
  static readonly deletePath = '/kitchenstory/v1/products/delete/{idProduct}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des produits
   *
   * Cette methode permet de chercher et renvoyer la liste des produits qui existent dans la BDD
   * @return La liste des produits / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/kitchenstory/v1/products/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * Renvoi la liste des produits
   *
   * Cette methode permet de chercher et renvoyer la liste des produits qui existent dans la BDD
   * @return La liste des produits / Une liste vide
   */
  findAll(): __Observable<Array<Product>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * Enregistrer un produit
   *
   * Cette methode permet d'enregistrer ou modifier un produir
   * @param body undefined
   * @return L'objet produit cree / modifie
   */
  saveResponse(body?: Product): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/kitchenstory/v1/products/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * Enregistrer un produit
   *
   * Cette methode permet d'enregistrer ou modifier un produir
   * @param body undefined
   * @return L'objet produit cree / modifie
   */
  save(body?: Product): __Observable<Product> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Supprimer un produit
   *
   * Cette methode permet de supprimer un produit par ID
   * @param idProduct undefined
   */
  deleteResponse(idProduct: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/kitchenstory/v1/products/delete/${encodeURIComponent(String(idProduct))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un produit
   *
   * Cette methode permet de supprimer un produit par ID
   * @param idProduct undefined
   */
  delete(idProduct: number): __Observable<null> {
    return this.deleteResponse(idProduct).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProductsService {
}

export { ProductsService }
