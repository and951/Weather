import { connect } from 'react-redux'
import WeatherForecast from '../../components/WeatherForecast'


const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const Weather = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecast)

export default Weather
