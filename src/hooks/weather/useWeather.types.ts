export interface IAppWeatherTemperature {
  day: number;
  evening: number;
  max: number;
  min: number;
  morning: number;
  night: number;
}

export interface IAppWeatherDay {
  temperatures: IAppWeatherTemperature;
}

export interface IAppWeatherData {
  location: string;
}
