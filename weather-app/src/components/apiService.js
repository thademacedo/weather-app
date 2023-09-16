import axios from "axios";
console.log(axios.isCancel("something"));

const fetchWeatherData = async () => {
  const options = {
    method: "GET",
    url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
    params: {
      aggregateHours: "24",
      location: "Washington,DC,USA",
      contentType: "json",
      unitGroup: "us",
      shortColumnNames: "0",
    },
    headers: {
      "X-RapidAPI-Key": "42e9775b1fmshbae084fb66b9cf3p166f07jsne75b7df7f12c",
      "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeatherData;
