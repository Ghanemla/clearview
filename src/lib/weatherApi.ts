import axios from "axios";
import type { WeatherResponse } from "../types/WeatherResponse";

const baseUrl = "http://api.weatherapi.com/v1";

export async function getWeatherData(
  location: string
): Promise<WeatherResponse> {
  const response = await axios.get<WeatherResponse>(
    `${baseUrl}/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`
  );
  return response.data;
}
