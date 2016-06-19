import { Component, Input, OnInit, Inject } from '@angular/core';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'weather',
  templateUrl: 'app/weather/weather.component.html',
  styleUrls: ['app/weather/weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather:any;
  icon:string;

  private get url():string {
    return 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22cary%2C%20nc%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  }

  constructor(
    private http:Http
  ) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      this.weather = response.json();

      var matches = this.weather.query.results.channel.item.description.match(/img src=\".*\"/g);
      this.icon = matches[0].replace('img src=\"', '').replace('\"', '');
    });
  };
}
