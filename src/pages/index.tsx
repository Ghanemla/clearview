import { useState } from "react";
import { getWeatherData } from "@/lib/weatherApi";
import type { WeatherResponse } from "@/types/WeatherResponse";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = await getWeatherData(location);
    setWeatherData(data);
  }
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="location">
          Enter a location:
        </label>
        <input
          className="border rounded px-2 py-1 mb-2"
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button className="bg-blue-500 text-white rounded px-4 py-2">
          Get Weather
        </button>
      </form>
      {weatherData && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">
            Weather in {weatherData.location.name}
          </h2>
          <p className="mb-2">{weatherData.current.condition.text}</p>
          <p className="mb-2">
            Temperature: {weatherData.current.temp_c} &deg;C
          </p>
          <p className="mb-2">Humidity: {weatherData.current.humidity}%</p>
          <p className="mb-2">
            Wind Speed: {weatherData.current.wind_kph} km/h
          </p>
        </div>
      )}
    </div>
  );
}
