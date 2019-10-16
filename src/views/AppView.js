import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';
import WeatherCard from '../components/WeatherCard';
import WeatherCharts from '../components/WeatherCharts';
import SelectDate from '../components/SelectDate';
import SelectDropdown from '../components/SelectDropdown';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import i18next from 'i18next';

class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      metricOptions: [
        { id: 'si', name: '°C, m/s' },
        { id: 'us', name: '°F, mph' }
      ],
      languageOptions: [
        { id: 'en', name: 'English' },
        { id: 'nl', name: 'Nederlands' },
        { id: 'fr', name: 'Français' },
        { id: 'de', name: 'Deutsch' },
        { id: 'es', name: 'Español' },
        { id: 'it', name: 'Italiano' },
      ]
    }

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleMetrics = this.handleMetrics.bind(this);
  }

  // new city
  handleDataChange(lat, lng, city) {
    this.props.onDataChange(lat, lng);
    this.setState((state) => {
      return {
        ...state,
        city
      }
    });
  }

  // new date
  handleDateChange(timestamp) {
    this.props.onDateChange(timestamp);
  }

  // new language
  handleLanguageChange(lang) {
    this.props.onLanguageChange(lang);
  }

  // new metrics
  handleMetrics(metrics) {
    this.props.onMetricsChange(metrics);
  }

  renderCharts() {
    const observedData = this.props.observedData;
    if (observedData) {
      return <WeatherCharts weatherData={observedData}/>;
    }
    return;
  }

  render() {
    return (
      <div>
        <AppHeader/>
        <div className="dropdown-wrapper">
          <SelectDropdown
            selectedOption={this.props.selectedMetrics}
            options={this.state.metricOptions}
            onSelect={this.handleMetrics}
          />
          <SelectDropdown
            selectedOption={this.props.selectedLanguage}
            options={this.state.languageOptions}
            onSelect={this.handleLanguageChange}
          />
        </div>
        <SearchInput
          onDataChange={this.handleDataChange}
        />
        <WeatherCard
          weatherData={this.props.weatherData}
          city={this.state.city}
        />
        <p className="weather-teaser">
          {i18next.t("VIEW_PAST_OR_FUTURE_WEATHER")}
        </p>
        <SelectDate
          onDateChange={this.handleDateChange}
        />
        {this.renderCharts()}
        <AppFooter/>
      </div>
    );
  }
}

AppView.propTypes = {
  weatherData: PropTypes.object.isRequired,
  observedData: PropTypes.object,
  onDataChange: PropTypes.func,
  onDateChange: PropTypes.func
};

export default AppView;