import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTemperatureArrowDown, faTemperatureArrowUp, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { response } from 'express';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService){

  }
  cityName:string = 'Ottawa';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response)=>{
        this.weatherData = response;
      }
    })    
  }
  
  title = 'WeatherApp';
  faTemperatureLow = faTemperatureArrowDown;
  faTemperatureHigh = faTemperatureArrowUp;
  faDroplet = faDroplet;
  faWind = faWind;
}
