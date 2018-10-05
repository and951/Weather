/*!
 * Use is subject to license terms.
 * Filename: Country.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        28/09/2018
 * Description: This component is a CountryAutoComplete Input for working with google autocomplete
 */
import React from 'react'
import './styles.css'
//Dependencies
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import MaterialIcon from 'material-icons-react';


class CountryAutoComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCity: "",
    };
  }

  handleChange = selectedCity => {
    this.setState({ selectedCity: selectedCity });
  };

  handleSelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => this.props.onPlaceSelected(results))
      .catch(error => this.props.onPlaceSelectedError(error));
  };

  render() {
    return (
      <div className={`${this.props.className} countryAutoComplete`}>

        <PlacesAutocomplete
          value={this.state.selectedCity}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'City',
                  className: 'location-search-input',
                })}
                className={'input'}
                disableUnderline={true}
              />
              <div className={'searchIcon'}>
                <MaterialIcon size={'25px'} icon="search" />
              </div>
              <div className="autocomplete-dropdown-container">
                {suggestions.slice(3).map(suggestion => {
                  console.log(suggestion);
                  <p ><b>{this.state.selectedCity}</b>{suggestion.formattedSuggestion.mainText.slice(this.state.selectedCity.length)}</p>
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                      })}
                      className={'suggestion '}
                    >
                      <p ><b className="coincidence">{this.state.selectedCity}</b>{suggestion.formattedSuggestion.mainText.slice(this.state.selectedCity.length)}</p>
                    </div>
                  );
                })}
                {suggestions.length == 0 &&
                  <div>
                    <p>or</p>
                    <p>use my <p className={"currentLocation"}>current Location</p></p>
                  </div>}
              </div>
            </div>

          )}
        </PlacesAutocomplete>

      </div>
    );
  }
}


export default CountryAutoComplete
