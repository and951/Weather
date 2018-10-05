/*!
 * Use is subject to license terms.
 * Filename: Country.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        28/09/2018
 * Description: This component is the CitySelector of the app. 
 */
import React from 'react'
import './styles.css'
//Dependencies
import CountryAutoComplete from '../CountryAutoComplete';
import Input from '@material-ui/core/Input';
//This is a const that specifies tha change place event.


class CitySelector extends React.Component {

  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.event = null;
    this.state = {
      returnFormat: props.returnFormat ? props.returnFormat : DEFAULT_RETURN_FORMAT,
      inputEmpty: true,
    };
  }

  handleChange = selectedCity => {
    this.setState({ selectedCity: selectedCity });
  };

  handleSelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latLng => getWeatherByGeoloc(latLng.lat, latLng.lng).then((result) => {
        this.props.handleResult(result);
      })).catch((error) => {
        this.props.handleError(error);
      })
      .catch(error => this.props.handleError(error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.selectedCity}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <Input
              {...getInputProps({
                placeholder: 'City',
                className: 'location-search-input',
              })}
              className={this.props.InputClass}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                    })}
                    className={this.props.suggestionClass}
                  >
                    <p><b>{this.state.selectedCity}</b>{suggestion.description.slice(this.state.selectedCity.length)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}


export default CitySelector
