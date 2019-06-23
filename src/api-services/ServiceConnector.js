import axios from 'axios';
import Error from '../models/Error';
import Response, { FAIL, SUCCESS } from '../models/Response';

const submitRequest = async (options) => {
  try {
	  console.log(options)
    const request = await axios(options);
    const data = await request.data;
    const code = await request.status;
    return new Response({data, code, status: SUCCESS});
  } catch (error) {
    return new Response({status: FAIL}, new Error(error));
  }
};

export default class ServiceConnector {
  constructor(host, token) {
    this.host = host;
    this.token = token;
  }

  invokeRequest = ({ url, params, data, method }) => {
    return this.callApi({
      method,
      url,
      params,
      data,
    });
  };

  callApi = ({
    host = this.host,
    url = '/',
    params = '',
    data = '',
    method = 'GET',
    responseType = 'json',
  }) => {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };

    const options = {
      baseURL: host,
      url,
      params,
      method,
      headers,
      responseType,
    };

    const methodCall = (method || '').toUpperCase();
    if (methodCall === 'PUT' || methodCall === 'POST' || methodCall === 'PATCH') {
      options.data = data;
    }

    return submitRequest(options);
  };
}
