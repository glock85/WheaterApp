import { SetStateAction, useState } from "react";
import { weatherIcons } from "../Utils/icons";
import cloud_icon from "../Assets/cloud.png";
import clear_icon from "../Assets/clear.png";

interface WeatherData {
  humidity: string;
  windSpeed: string;
  temperature: string;
  location: string;
}

interface handleInputChange {
  target: { value: SetStateAction<string> };
}

export const useGetWheater = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [wicon, setWicon] = useState<string>(cloud_icon);
  const [searchInput, setSearchInput] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>({
    humidity: "64%",
    windSpeed: "18 km/h",
    temperature: "20°C",
    location: "London",
  });

  const handleInputChange = (e: handleInputChange) => {
    setSearchInput(e.target.value);
  };

  const updateWeatherData = (data: {
    main: { humidity: string; temp: string };
    wind: { speed: string };
    name: string;
    weather: { icon: string }[];
  }) => {
    setWeatherData({
      humidity: `${data.main.humidity}%`,
      windSpeed: `${data.wind.speed} km/h`,
      temperature: `${data.main.temp}°C`,
      location: data.name,
    });
    const weatherIconKey = data.weather[0].icon;
    setWicon(weatherIcons[weatherIconKey] || clear_icon);
  };

  const onSearch = async () => {
    if (!searchInput) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=Metric&appid=${api_key}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        updateWeatherData(data);
        console.log(data);
        console.log("search");
      } else {
        console.error("Error fetching weather data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return {
    wicon,
    searchInput,
    weatherData,
    handleInputChange,
    onSearch,
  };
};
