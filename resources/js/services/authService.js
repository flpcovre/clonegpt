import { http } from './http';

class AuthService {

    async login(credentials) {
        try {
            const response = await http.post('/login', credentials);
            const { token } = response.data;

            if (token) {
                localStorage.setItem('token', token);
                return true;
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return false;
        }
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }
}

export const authService = new AuthService();
