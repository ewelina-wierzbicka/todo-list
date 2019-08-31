import { Injectable } from '@angular/core';
import { r3JitTypeSourceSpan } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
getData(key: string) {
return JSON.parse(localStorage.getItem(key));
}
setData(key: string, data: any) {
localStorage.setItem(key, JSON.stringify(data));
}
  constructor() { }
}
