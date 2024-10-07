import React from "react";
export default function Weather({ weather }) {
  return (
    <>
      <div className="container px-5  my-10 ">
        <div className="  card shadow-xl rounded-3xl max-w-lg border mx-auto">
          <div className="flex justify-around">
            <div className="p-5">
              <div>
                <p className="font-semibold text-blue-500 sm:text-2xl text-xl ">
                  {weather.city}, {weather.countryCode}
                </p>
                <p className="sm:text-lg text-sm font-bold text-gray-500">
                  {weather.weather[0].description}
                </p>
              </div>
              <div className="mt-6">
                <h1 className="font-extrabold sm:text-5xl text-2xl text-blue-500">
                  {weather.main.temp}℃
                </h1>
              </div>
            </div>

            <div className="w-32 mt-5 mr-2">
              <img
                src={`/icons/${weather.weather[0].icon}.png`}
                className="object-cover pt-4 px-2"
                alt="icon"
              />
            </div>
          </div>

          <div className="mx-auto mb-5">
            <div class="flex flex-row justify-center  lg:gap-6 gap-3 mt-4 ">
              <div class="flex flex-col items-center px-2">
                <div class="font-semibold md:text-lg text-sm text-blue-500">
                  Wind
                </div>
                <div class="md:text-lg text-sm  font-bold text-gray-500">
                  {Math.floor(weather.wind.speed)}k/h
                </div>
              </div>
              <div class="flex flex-col items-center px-2">
                <div class="font-semibold md:text-lg text-sm text-blue-500">
                  Humidity
                </div>
                <div class="md:text-lg text-sm font-bold text-gray-500">
                  {weather.main.humidity}%
                </div>
              </div>
              <div class="flex flex-col items-center px-2">
                <div class="font-semibold md:text-lg text-sm text-blue-500">
                  Visibility
                </div>
                <div class="md:text-lg text-sm font-bold text-gray-500">
                  {weather.visibility / 1000}km
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
