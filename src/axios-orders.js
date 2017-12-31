import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learning-react-burger-builder.firebaseio.com/'
});

export default instance;
