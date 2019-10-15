import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';
import WeatherCard from '../components/WeatherCard';
import WeatherCharts from '../components/WeatherCharts';
import SelectDate from '../components/SelectDate';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  // new city
  handleDataChange(lat, lng, city) {
    this.props.onDataChange(lat, lng);
    this.setState({
      city
    })
  }

  // new date
  handleDateChange(timestamp) {
    this.props.onDateChange(timestamp);
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
        <SearchInput onDataChange={this.handleDataChange.bind(this)}/>
        <WeatherCard weatherData={this.props.weatherData} city={this.state.city}/>
        <p className="weather-teaser">
          Curious about the past weather or what's coming next?<br/>Select a date and find out.
        </p>
        <SelectDate onDateChange={this.handleDateChange.bind(this)}/>
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