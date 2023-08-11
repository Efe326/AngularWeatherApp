import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'c153d8a4e2msh4c8a8de7f4447e1p1cf5a9jsn3c304999c42b'; 
  
  constructor(private http: HttpClient) { }

  getWeatherData(latitude: number, longitude: number): Observable<any> {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
    
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });

    return this.http.get(url, { headers });
  }
}
