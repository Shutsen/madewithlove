import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AppView from "../views/AppView.js";
import dummyWeatherData from "../assets/testData.json";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders weather data passed by the parent", () => {
  const fakeWeatherData = dummyWeatherData;

  act(() => {
    render(<AppView weatherData={fakeWeatherData} />, container);
  });

  expect(container.querySelector(".weather-card time").textContent).toBe("Sun Oct 13th 2019");
  expect(container.querySelector("ul.weather-hourly:first-child .wh-item .wh-temperature").textContent).toBe("55°");
  expect(container.querySelector("ul.weather-hourly").children).toHaveLength(24);
  expect(container.querySelector(".weather-measurements tbody tr:nth-child(2) td").textContent).toBe("16:17");
});