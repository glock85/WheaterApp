import search_icon from "../Assets/search.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

interface Props {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  wicon: string;
  weatherData: {
    temperature: string;
    location: string;
    humidity: string;
    windSpeed: string;
  };
}

export const WheaterCard = ({
  searchInput,
  handleInputChange,
  onSearch,
  wicon,
  weatherData,
}: Props) => {
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          value={searchInput}
          onChange={handleInputChange}
        />
        <div className="search-icon" onClick={onSearch}>
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="cloud" />
      </div>
      <div className="weather-temp">{weatherData.temperature}</div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="wind" className="icon" />
          <div className="data">
            <div className="wind-rate">{weatherData.windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
