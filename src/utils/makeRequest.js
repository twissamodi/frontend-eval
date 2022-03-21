import axios from 'axios';
import { BACKEND_URL, AUTH_TOKEN } from '../constants/apiEndPoints';

const makeRequest = async (apiEndpoint, dynamicConfig = {}) => {
  const details = await axios({
    ...apiEndpoint,
    url: `${BACKEND_URL}${apiEndpoint.url}`,
    data: {
      ...dynamicConfig,
    },
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return details.data.data;
};

export default makeRequest;
