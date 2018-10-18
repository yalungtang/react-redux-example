import axios from 'axios';

const routes = {
    error: 'http://www.mocky.io/v2/5bc852d53200005d0059fe00',
    success: 'http://www.mocky.io/v2/5bc852b6320000700059fdfd'
};

export const callApi = (route) => axios.get(routes[route]);