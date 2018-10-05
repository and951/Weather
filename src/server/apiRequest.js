import axios from 'axios';

/**
 * Sends and retrieves data from a server, given the parameters,
 * using Axios API Request
 * @param {JSON} apiRequestInfo
 */
const apiRequest = ({
  method = 'get',
  url = '',
  headers = {},
  data = {},
  responseType = 'json',
  onSuccess = (response => console.warn(response)),
  onError = (response => console.warn(response)),
}) => {
  axios({
    method: method,
    url: url,
    headers: headers,
    data: data,
    responseType: responseType,
  })
  .then((response) => {
    onSuccess(response)
  })
  .catch((response) => {
    onError(response)
  })
}

export default apiRequest
