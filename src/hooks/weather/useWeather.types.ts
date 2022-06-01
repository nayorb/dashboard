export type AppWeatherIconId =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

export interface IAppWeatherTemperature {
  day: number;
  evening: number;
  max: number;
  min: number;
  morning: number;
  night: number;
}

export interface IAppWeatherDetails {
  description: string;
  icon: AppWeatherIconId;
  id: number;
  main: string;
}

export interface IAppWindDetails {
  deg: number;
  gust: number;
  speed: number;
}

export interface IAppWeatherDay {
  temperatures: IAppWeatherTemperature;
  date: number;
  humidity: number;
  pop: number;
  uvi: number;
  weather: IAppWeatherDetails;
  wind: IAppWindDetails;
}

export interface IAppWeatherHour {}

export interface IAppWeatherCurrent {
  temperature: number;
  humidity: number;
  uvi: number;
  weather: IAppWeatherDetails;
}

export interface IAppWeatherData {
  location: string;
  current: IAppWeatherCurrent;
  today: IAppWeatherDay;
}
