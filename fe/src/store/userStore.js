import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie';

const useUserStore = create((set) => ({
    status: 200,
    isLoading: false,
    login: (email, password) => {
        const data = { email, password }

        set({ isLoading: true });
        axios.post(`${process.env.API_URL}/user/login/`, data)
        .then((response) => {
            Cookies.set('session', response.data.token)
            set({ isLoading: false, status: response.status, token: response.data.token });
        }).catch((error) => {
            set({ isLoading: false, status: error.status });
        });
    }
}));
export default useUserStore;

