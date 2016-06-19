import { Injectable } from '@angular/core';

@Injectable()
export class EditService {

  private _edit:boolean = false;

  public get edit():boolean {
    return this._edit;
  }

  constructor() {
    this._edit = false;
  }

  toggle() {
    this._edit = !this._edit;
  }
}
