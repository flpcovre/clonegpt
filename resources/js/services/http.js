import axios from 'axios';

class Http {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL,
        });

        this.client.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error) => Promise.reject(error));
    }

    async get(url, params = {}) {
        return (await this.client.get(url, { params })).data;
    }

    async post(url, data = {}) {
        return (await this.client.post(url, data)).data;
    }

    async put(url, data = {}) {
        return (await this.client.put(url, data)).data;
    }

    async delete(url) {
        return (await this.client.delete(url)).data;
    }
}

const baseURL = `${window.BASE_URL}/api`;
export const http = new Http(baseURL);
