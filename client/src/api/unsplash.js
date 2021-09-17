import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4lRN_DbZZ3ScYhAuuwY_bTZfEEpEstRVrk-z-ngmTl0'
    }
})