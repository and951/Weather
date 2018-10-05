import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from '../Hero'
import CountryAutocompleteInput from '../CountryAutocompleteInput'
import Quote from '../Quote'
import AgencyCardContainer from '../AgencyCardContainer'
import desktopLogo from "../../assets/img/heroDesktopLogo.jpg"
import mobileLogo from "../../assets/img/heroMobileLogo.jpg"
import './styles.css'
import { withCookies } from 'react-cookie'

class Home extends Component {
  constructor(props) {
    super(props)
    const { cookies } = this.props;
    this.state = {
      userToken: cookies.get('token') ? cookies.get('token') : undefined,
      location: null,
      agencyContainerKey: Date.now(),
    }
    this.handleLocation = this.handleLocation.bind(this)
  }

  handleLocation(newLocation) {
    this.setState({
      location: newLocation,
      agencyContainerKey: Date.now(),
    })
    this.props.onResetAgencies()
  }

  render() {
    const heroContent =
      <div className={`hero-content ${this.state.userToken ? 'hero-content-without-quote' : ''}`}>
        {
          this.state.userToken ? null :
            <Quote
              containerClassName="quote-container"
              quote="Boydguard me da la libertad de tener la seguridad que merezco cuando y donde la requiero"
              source="Weather developers"
              buttonLabel="Suscribirse"
            />
        }
        <CountryAutocompleteInput
          needsContainer={true}
          containerCountryAutoCompleteClassName="home-page__locationSelector"
          inputContainerClassName="ui action input"
          inputClassName="countryAutoComplete__input"
          iconContainerClassName="ui rotated right  icon button countryAutoComplete__search-button"
          iconClassName="icon big search"
          eraseIconClassName="icon big delete"
          className="home-page__locationSelector"
          id="CountryAutocompleteInput"
          placeholder="Buscar por lugar"
          onPlaceSelected={newLocation => this.handleLocation(newLocation)}
        />
      </div>;

    return (
      <div className="home-page">
        <Hero mobileSrc={mobileLogo} imageSrc={desktopLogo} withoutQuote={this.state.userToken !== undefined}>
          {heroContent}
        </Hero>
        <AgencyCardContainer
          user={this.props.user}
          key={`agencies${this.state.agencyContainerKey}`}
          agencies={this.props.agencies}
          location={this.state.location}
          onGetAgenciesByIds={this.props.onGetAgenciesByIds}
          onSelectAgency={this.props.onSelectAgency}
        />
      </div >
    )
  }
}



export default withCookies(Home)
