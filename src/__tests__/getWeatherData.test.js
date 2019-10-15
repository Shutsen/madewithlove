import mockAxios from 'axios';
import { getWeatherData, getObservedData } from '../services/getWeatherData';
import mockedData from '../assets/testData.json';
import mockedObservedData from '../assets/observedTestData.json';

it('calls axios and gets the weather data', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      weatherData: mockedData
    }
  }));

  const weatherData = await getWeatherData();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(weatherData).toEqual(mockedData);
});

it('calls axios and gets the observed data', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      observedData: mockedObservedData
    }
  }));

  const observedData = await getObservedData();

  expect(mockAxios.get).toHaveBeenCalledTimes(2);
  expect(observedData).toEqual(mockedObservedData);
});

