import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation :ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit{
  url?:string;
  show=true;
  ngOnInit(): void {
    this.url=this.url1;
  }
  title = 'Gestion des livres';
  jours=['Lundi','Mardi','Mercredi','..']
  url2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGa4e5-x6JueK6vSe5t2XXd_dyFPx-3K-sHdFyE4K&s";
  url1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnspxPwqHmA-DwC6bXBbhMACVu5yaast3ZL70acJA4A&s";
  changeLogo=()=>
  {
    this.url=(this.url===this.url1)?this.url2:this.url1;
  }
  showLogo=()=>
  {
     this.show =!this.show;
  }
}
