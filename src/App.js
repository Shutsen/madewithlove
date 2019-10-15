import React, { Component } from 'react';
import LoadingView from './views/LoadingView';
import UnsupportedView from './views/UnsupportedView';
import AppView from './views/AppView';
import getClientPosition from './services/getCurrentPosition';
import { getWeatherData, getObservedData } from './services/getWeatherData';
import { assertSupportedBrowser } from './utils/browsers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      observedData: null,
      lat: '',
      lng: '',
      isSupportedBrowser: true,
      isError: false,
      loaded: false
    };
  }

  componentDidMount() {
    // first check browser compatibility
    const isSupportedBrowser = assertSupportedBrowser();

    // exit early if we do not support the client's browser
    if (!isSupportedBrowser) {
      this.handleUnsupportedBrowser();
      return;
    }

    this.getData()
  }

  handleUnsupportedBrowser() {
    this.setState({
      isSupportedBrowser: false,
      loaded: true
    });
  }

  async getData(lat, lng) {
    if (!lat || !lng) {
      const response = await getClientPosition();
      lat = response.lat;
      lng = response.lng;
    }

    const weatherData = await getWeatherData(lat, lng);

    this.setState({
      weatherData,
      lat,
      lng,
      observedData: null,
      isSupportedBrowser: true,
      loaded: true
    });
  }

  handleDataChange(lat, lng) {
    this.getData(lat, lng);
  }

  async handleDateChange(timestamp) {
    const observedData = await getObservedData(this.state.lat, this.state.lng, timestamp);

    this.setState({
      observedData
    })
  }

  getView() {
    let view;
    // still loading
    if (!this.state.loaded) {
      view = <LoadingView />
      return view;
    }
    // dinosaur browser
    if (!this.state.isSupportedBrowser) {
      view = <UnsupportedView />
      return view;
    }
    // good to go
    view = <AppView
            weatherData={this.state.weatherData}
            observedData={this.state.observedData}
            onDataChange={this.handleDataChange.bind(this)}
            onDateChange={this.handleDateChange.bind(this)}
          />
    return view;
  }

	render() {
    const view = this.getView()

		return (
      <div>
        {view}
      </div>
		);
	}
}

export default App;