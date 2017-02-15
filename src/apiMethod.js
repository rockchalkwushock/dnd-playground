import axios from 'axios';

const sendData = () => ({
  // Request
  axios({
    url: `${cloudName}/delete_by_token`,
    method: 'post',
    baseURL: 'https://api.cloudinary.com/v1_1/', // will prepend to url
    transformRequest: [data => {
      
    }],
    transformResponse: [],
    headers: {},
    params: {},
    data: {},
    timeout: /* number */,
    withCredentials: /* bool */,
    adapter: /* func */,
    auth: {},
    responseType: 'json', // default value
    xsrfCookieName: /* string */,
    xsrfHeaderName: /* string */,
    onUploadProgress: /* func */, // can use this for a Progress Component.
    maxContentLength: /* number */,
    validateStatus: /* func */,
    maxRedirects: /* number */,
    httpAgent: /* new object instance */,
    httpsAgent: /* new object instance */,
    proxy: {},
    cancelToken: /* new object instance */
  })
});

// Response
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {}
}
