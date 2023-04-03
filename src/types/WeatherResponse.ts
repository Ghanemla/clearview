export interface WeatherResponse{
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localTime_epoch: number;
    localTime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number
    };
    wind_kph: number;
    humidity: number;
    feelsLike_c: number;
  }
}