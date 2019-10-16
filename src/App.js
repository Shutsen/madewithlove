import React, { Component } from 'react';
import i18next from 'i18next';
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
      lat: null,
      lng: null,
      lang: { id: 'en', name: 'English' },
      metrics: { id: 'si', name: '°C, m/s'},
      isSupportedBrowser: true,
      isError: false,
      loaded: false
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleMetricsChange = this.handleMetricsChange.bind(this);
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
    this.setState((state) => {
      return {
        ...state,
        isSupportedBrowser: false,
        loaded: true
      }
    });
  }

  async getData(lat, lng, lang, metrics) {
    if (!lat || !lng) {
      const response = await getClientPosition();
      lat = response.lat;
      lng = response.lng;
    }

    if (!lang) {
      lang = this.state.lang.id;
    }

    if (!metrics) {
      metrics = this.state.metrics.id;
    }

    const weatherData = await getWeatherData(lat, lng, lang, metrics);

    this.updateState({
      weatherData,
      lat,
      lng,
      observedData: null,
      isSupportedBrowser: true,
      loaded: true
    });
  }

  handleDataChange(lat, lng) {
    this.getData(lat, lng, null, null);
  }

  async handleDateChange(timestamp) {
    const observedData = await getObservedData(this.state.lat, this.state.lng, this.state.lang.id, this.state.metrics.id, timestamp);
    this.updateState({ observedData });
  }

  handleLanguageChange(lang) {
    this.updateState({ lang });

    i18next.changeLanguage(lang.id, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key'); // -> same as i18next.t
    });
    
    this.getData(this.state.lat, this.state.lng, lang.id, null);
  }

  handleMetricsChange(metrics) {
    this.updateState({ metrics });
    this.getData(this.state.lat, this.state.lng, null, metrics.id)
  }

  updateState(newData) {
    this.setState((state) => {
      return {
        ...state,
        ...newData
      }
    });
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
            onDataChange={this.handleDataChange}
            onDateChange={this.handleDateChange}
            onLanguageChange={this.handleLanguageChange}
            selectedLanguage={this.state.lang}
            onMetricsChange={this.handleMetricsChange}
            selectedMetrics={this.state.metrics}
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