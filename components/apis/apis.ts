import axios from 'axios';

const BASE_URL = 'http://34.47.173.235/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Inject token for auth endpoints
export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const registerUser = (data: any) => api.post('/register/', data);

export const loginUser = (data: any) => api.post('/api/token/', data);

export const refreshToken = (refresh: string) =>
  api.post('/api/token/refresh/', { refresh });

export const completeRegistration = (data: any) =>
  api.post('/complete_registration/', data);

export const getUserDetails = () => api.get('/user/');

export const getRegistrationDetails = () => api.get('/registration/');

export const updateRegistration = (data: any) =>
  api.put('/registration/update/', data);
