import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

//context to get root functionality
export const AppContext = createContext();

function App() {
  //states of the app
  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageDetails, setImageDetails] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  //all urls
  const photos_url = `https://api.unsplash.com/photos?client_id=SVbWr7AhrDpWb2EiHHwm-i4K1sytxI2hitF1IkYf-Zc`;
  const search_url = `https://api.unsplash.com/search/photos?&query=${searchInput}&client_id=SVbWr7AhrDpWb2EiHHwm-i4K1sytxI2hitF1IkYf-Zc`;

  //get the from photos_url
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(photos_url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [photos_url]);

  //get data search_url
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(search_url)
      .then((response) => {
        setSearchData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [search_url]);

  //sending app info
  const appInfo = {
    setSearchInput,
    isLoading,
    searchInput,
    searchData,
    setImageDetails,
    data,
    imageDetails,
  };
  return (
    <AppContext.Provider value={appInfo}>
      <Header />
      <LandingPage />
    </AppContext.Provider>
  );
}

export default App;
