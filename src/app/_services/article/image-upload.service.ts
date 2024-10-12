import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  convertModelToFormData,
  convertSingleFileModelToFormData,
} from 'src/app/_functions/formDataConverter';
import { Image } from 'src/app/_models/image';
import { environment } from 'src/environments/environment';
import { createRequestPipeline } from 'src/utils/query';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  apiUrl: string = environment.apiUrl;
  baseUrl = `${this.apiUrl}/image`;

  private articleImageTrigger$ = new Subject<{
    articleType: string;
    pk: number;
  }>();
  articleImages = createRequestPipeline(
    this.articleImageTrigger$.asObservable(),
    (params) => this._loadArticleImages(params.articleType, params.pk),
  );

  private updateTrigger$ = new Subject<{
    imagePk: number;
    imageModel: Image;
  }>();
  update = createRequestPipeline(this.updateTrigger$.asObservable(), (params) =>
    this._runUpdate(params.imagePk, params.imageModel),
  );

  private createTrigger$ = new Subject<Partial<Image>>();
  create = createRequestPipeline(this.createTrigger$.asObservable(), (data) =>
    this._runCreate(data),
  );

  private patchTrigger$ = new Subject<{
    imagePk: number;
    data: Partial<Image>;
  }>();
  patch = createRequestPipeline(this.patchTrigger$.asObservable(), (params) =>
    this._runPatch(params.imagePk, params.data),
  );

  private deleteTrigger$ = new Subject<{ pk: number }>();
  delete = createRequestPipeline(this.deleteTrigger$.asObservable(), (params) =>
    this._runDelete(params.pk),
  );

  constructor(private http: HttpClient) {}

  loadArticleImages(articleType: string, pk: number) {
    this.articleImageTrigger$.next({ articleType, pk });
  }

  private _loadArticleImages(
    articleType: string,
    pk: number,
  ): Observable<Image[]> {
    const url = `${this.baseUrl}/${articleType}/${pk}`;
    return this.http.get<Image[]>(url);
  }

  runUpdate(imagePk: number, imageModel: Image) {
    this.updateTrigger$.next({ imagePk, imageModel });
  }

  private _runUpdate(imagePk: number, imageModel: Image) {
    const formData: FormData = convertSingleFileModelToFormData(
      imageModel,
      'image',
    );
    const url = `${this.baseUrl}/pk/${imagePk}/`;
    return this.http.put<Image>(url, formData);
  }

  runCreate(imageModel: Partial<Image>) {
    this.createTrigger$.next(imageModel);
  }

  private _runCreate(imageModel: Partial<Image>): Observable<Image> {
    const url = `${this.baseUrl}/upload/`;
    const formData: FormData = convertSingleFileModelToFormData(
      imageModel,
      'image',
    );
    return this.http.post<Image>(url, formData);
  }

  runPatch(imagePk: number, imageModel: Partial<Image>) {
    this.patchTrigger$.next({ imagePk, data: imageModel });
  }

  private _runPatch(
    imagePk: number,
    imageModel: Partial<Image>,
  ): Observable<Image> {
    const url = `${this.baseUrl}/pk/${imagePk}/`;

    const formData: FormData = convertModelToFormData(imageModel);
    return this.http.patch<Image>(url, formData);
  }

  runDelete(image_pk: number) {
    this.deleteTrigger$.next({ pk: image_pk });
  }

  private _runDelete(image_pk: number): Observable<any> {
    const url = `${this.baseUrl}/pk/${image_pk}`;
    return this.http.delete<any>(url);
  }
}
