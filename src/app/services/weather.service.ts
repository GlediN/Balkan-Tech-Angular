import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environmentVar} from "../enovironment-variables/environment-var";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private openWeatherMapApiKey = environmentVar.openWeatherMapAPI;
  private ipinfoApiKey = environmentVar.ipinfoAPI;
  private openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getUserLocation(): Observable<any> {
    return this.http.get(`http://ipinfo.io?token=${this.ipinfoApiKey}`);
  }

  getTemperature(city: string): Observable<any> {
    const url = `${this.openWeatherMapUrl}?q=${city}&appid=${this.openWeatherMapApiKey}&units=metric`;
    return this.http.get(url);
  }


}
