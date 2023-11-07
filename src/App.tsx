import { WheaterCard } from "./components/WheaterCard";
import { useGetWheater } from "./hooks/useGetWheater";

export const App = () => {
  const { searchInput, handleInputChange, onSearch, wicon, weatherData } =
    useGetWheater();
  return (
    <WheaterCard
      {...{ searchInput, handleInputChange, onSearch, wicon, weatherData }}
    />
  );
};
