import axios from 'axios';
//could not get ngrok to work just used this and added @CrossOrigin on the back end for the 2 controllers..
export default axios.create({
    baseURL: '//localhost:8080',
    headers: { "ngrok-skip-browser-warning": "true" }
})