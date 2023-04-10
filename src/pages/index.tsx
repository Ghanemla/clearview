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
    <>
      <div className="flex  justify-center items-center  h-fit">
        <form
          className="!z-5 relative flex flex-col  flex-wrap  rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500   !p-4 3xl:p-![18px] text-black undefined"
          onSubmit={handleSubmit}
        >
          <label
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-2xl font-bold text-black transition duration-200 "
            htmlFor="location"
          >
            Enter a location:
          </label>
          <input
            className=" border-2 rounded px-2 py-1 mb-2 outline-none bg-transparent"
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <button className="bg-green-500   rounded px-4 py-2 flex items-center justify-center hover:bg-green-600 ">
            Get Current Weather Data
          </button>
          <div className=" text-center">
            {weatherData && (
              <div className="mt-4 ">
                <h2 className=" text-black text-4xl font-bold italic  text-center drop-shadow  my-5">
                  The weather in {weatherData.location.name}{" "}
                  {weatherData.location.country} is:
                </h2>
                <span className="text-black text-4xl font-bold italic  text-center drop-shadow ">
                  {weatherData.location.localtime}
                </span>
                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-slate-300 bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold mt-2">
                  <span className="text-xl font-bold bg-slate-200 rounded">
                    The Current Weather Condition In {weatherData.location.name}{" "}
                    Is{" : "}
                  </span>
                  {weatherData.current.condition.text}
                </p>

                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-red-500 bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold ">
                  <span className="bg-red-300 rounded">
                    Current Temp In &deg;C:
                  </span>
                  {weatherData.current.temp_c} &deg;C
                </p>
                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-red-500 bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold ">
                  <span className="bg-red-300 rounded">
                    Currently It Feels Like (&deg;C){" "}
                  </span>
                  Temp: {weatherData.current.feelslike_c} &deg;C
                </p>
                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-rose-500  bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold ">
                  <span className="bg-rose-300 rounded">
                    Current Temp In &deg;F:
                  </span>
                  <span>{weatherData.current.temp_f} &deg;F</span>
                </p>

                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-rose-500 bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold ">
                  <span className="bg-rose-300 rounded">
                    Currently It Feels Like (&deg;F){" "}
                  </span>
                  Temp: {weatherData.current.feelslike_f} &deg;F
                </p>
                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-blue-500  bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold">
                  <span className="bg-blue-300 rounded">
                    {" "}
                    Current Humidity:{" "}
                  </span>
                  Humidity: {weatherData.current.humidity}%
                </p>
                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-slate-400   bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold">
                  <span className="bg-slate-300 rounded">
                    {" "}
                    Current windspeed In KPH:{" "}
                  </span>
                  Wind Speed: {weatherData.current.wind_kph} KPH
                </p>
                <p className="mb-2 !z-5 relative flex flex-col rounded-lg m-auto bg-slate-400   bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] text-black undefined text-2xl font-bold">
                  <span className="bg-slate-300 rounded">
                    {" "}
                    Current windspeed In MPH:{" "}
                  </span>
                  Wind Speed: {weatherData.current.wind_mph} MPH
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
