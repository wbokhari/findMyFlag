import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Country} from '../shared/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

   public search: string;
   public title: string;
   private apiUrl: string = 'https://restcountries.eu/rest/v2/name/';
   public countries: Country[];

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  public searchCountry(searchText: string): void{
    this.search = searchText;
    this.http.get(this.apiUrl + searchText).subscribe((res:Response) => {
      this.countries = res.json();
      console.log(this.countries);
    })
    console.log("searchCountry", this.search);
  }


}
