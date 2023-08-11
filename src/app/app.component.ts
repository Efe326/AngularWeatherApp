import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName: string = 'Istanbul'; 
  currentTemperature: number = 0;
  minTemperature: number = 0;
  maxTemperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData(53.1, -0.13) 
      .subscribe(
        (data: any) => {
          this.currentTemperature = data.current.temp_c;
          this.minTemperature = data.current.feelslike_c;
          this.maxTemperature = data.current.feelslike_c;
          this.humidity = data.current.humidity;
          this.windSpeed = data.current.wind_kph;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
