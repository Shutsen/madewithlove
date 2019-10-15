import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

class SearchInput extends Component {
constructor(props) {
    super(props);
  
    this.state = {
      city: '',
      query: ''
    }

    // Bind Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  handleScriptLoad() { 
    // Declare Options For Autocomplete 
    var options = { types: ["(cities)"] }; 
    
    // Initialize Google Autocomplete 
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
                          document.getElementById("search-input"),
                          options );
    // Avoid paying for data that you don't need by restricting the 
    // set of place fields that are returned to just the address
    // components and formatted address
    this.autocomplete.setFields(["address_components", "formatted_address", "geometry"]);
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect); 
  }

  async handlePlaceSelect() {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    let latitude = addressObject.geometry.location.lat();
    let longitude = addressObject.geometry.location.lng();

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
      });
    }

    this.props.onDataChange(latitude, longitude, this.state.city);
  }

  render() {
    return (
      <form role="search" className="search-form">
        <label htmlFor="search-input">
          Search a city
        </label>
        <input id="search-input" type="search" placeholder="Really, any city" aria-labelledby="search-input"
          value={this.state.query} onChange={this.handleChange} tabIndex="1"
        />
        <Script url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}&libraries=places`} onLoad={this.handleScriptLoad}/>   
      </form>
    );
  }
}

SearchInput.propTypes = {
  onDataChange: PropTypes.func
};

export default SearchInput;