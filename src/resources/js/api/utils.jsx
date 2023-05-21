import axios from 'axios';

export async function callApi(getAccessTokenSilently, method, url, params, headers = {}) {
  const accessToken = await getAccessTokenSilently({
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    scope: 'read:current_user',
  });
  const h = headers;
  h.Authorization = `Bearer ${accessToken}`;
  const config = {
    method,
    url,
    headers,
  };
  if (method === 'GET') {
    config.params = params;
  } else if (method === 'POST') {
    config.data = params;
  } else if (method === 'DELETE') {
    config.data = params;
  }
  return axios(config);
}
