import { http } from './http';

export const authService =  {  
    async login(credentials) {
        try {
            const { access_token } = await http.post('/login', credentials);
            this.setToken(access_token);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getProfile: async () => await http.get('/me'),

    setToken: (token) => localStorage.setItem('token', token),

    getToken: () => localStorage.getItem('token'),

    destroyToken: () => localStorage.removeItem('token'),
}