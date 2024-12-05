import axios from 'axios';
import { useLoadingBar } from '@/composables/useLoadingBar';
import { authService } from '@/services/authService';

class Http {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL,
        });

        this.loadingBar = useLoadingBar();

        this.client.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${authService.getToken()}`;
            if (config.showLoadingBar !== false) this.loadingBar.showLoadingBar();
            return config;
        });

        this.client.interceptors.response.use((response) => {
            if (response.config.showLoadingBar !== false) this.loadingBar.hideLoadingBar();
            return response;
        });
    }

    async get(url, params = {}, options = {}) {
        return (await this.client.get(url, { params, ...options })).data;
    }

    async post(url, data = {}, options = {}) {
        return (await this.client.post(url, data, options)).data;
    }

    async put(url, data = {}, options = {}) {
        return (await this.client.put(url, data, options)).data;
    }

    async delete(url, options = {}) {
        return (await this.client.delete(url, options)).data;
    }
}

const baseURL = `${window.BASE_URL}/api`;
export const http = new Http(baseURL);
