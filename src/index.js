const axios = require('axios');

const callApi = async (method, url, body) => {
    const baseUrl = 'http://localhost:3000';
    const res = await axios({
        method,
        url: `${baseUrl}${url}`,
        data: body,
        headers: { 'Content-Type': 'application/json' },
      });
    return res;
}

// Get cars
const getCars = async (page, limit) => {
    try {
        const method = 'GET';
        const url = `/garage?_page=${page}&_limit=${limit}`;
        const res = await callApi(method, url);
        return res;
    } catch (error) {
        console.log(error);
    }
}

// create car

const createCar = async (name, color) => {
    try {
        const method = 'POST';
        const url = '/garage';
        const body = { name, color };
        const res = await callApi(method, url, body);
        return res;
    } catch (error) {
        console.log(error);
    }
}


getCars(1, 7);

// createCar('BMW', 'red');



