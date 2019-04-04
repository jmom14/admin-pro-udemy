import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { l } from '@angular/core/src/render3';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  changeColor(theme:string, link : any){
    console.log(theme);

    this.applyCheck(link)

    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById("theme").setAttribute('href',url);
  }

  applyCheck(link: any){

    let selectores: any = document.getElementsByClassName("selector");

    for(let s of selectores){
      s.classList.remove('working');
    }

    link.classList.add('working');

  }   
  
}
