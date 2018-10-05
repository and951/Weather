import { connect } from 'react-redux'
import CountryAutoComplete from '../../components/CountryAutoComplete'
import httpStatus from 'http-status'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const Country = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryAutoComplete)

export default Country
