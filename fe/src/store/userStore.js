import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie';
import axiosInstance from '@/utils/axiosInstance';

const useUserStore = create((set) => ({
    status: 200,
    isLoading: false,
    user: null,
    login: (email, password) => {
        const data = { email, password }

        set({ isLoading: true });
        axios.post(`${process.env.API_URL}/user/login/`, data)
        .then((response) => {
            Cookies.set('session', response.data.token)
            window.location.href = '/board';
            set({ isLoading: false, status: response.status, token: response.data.token });
        }).catch((error) => {
            set({ isLoading: false, status: error.status });
        });
    },
    logout:() => {
        Cookies.remove('session');
        window.location.href = '/';
    },
    getUser: () => {
        set({ isLoading: true });
        axiosInstance.get(`${process.env.API_URL}/user/user/`).
        then((response) => {
            set({ isLoading: false, user: response.data });
        }).catch((error) => {
            set({ isLoading: false, status: error.status });
        })
    }
}));
export default useUserStore;

