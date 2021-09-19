import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1/breeds";

export const getCatBreed = async () => {
  const allCats = await axios.get(`${BASE_URL}`);
  return allCats;
};
