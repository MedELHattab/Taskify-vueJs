import api from "./api"
import axios from 'axios';

export const csrfCookie = () => axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');


export const login = (credentials) => api.post('/login', credentials);
export const register = (user) => axios.post('http://127.0.0.1:8000/api/register', user);
export const logout = ()=>api.post('/logout');
// export const getUser =()=> api.get('/api/user')