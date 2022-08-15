import axios from 'axios';


const MAX_API_RESPONSE = 5

export const http =  axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
	params: { key: process.env.REACT_APP_API_KEY, maxResults: MAX_API_RESPONSE } 
});