import { create } from 'zustand';
import axiosInstance from '@/utils/axiosInstance';

const useBoardStore = create((set) => ({
    board: [],
    isLoading: false,
    getBoardList: () => {
        set({ isLoading: true });
        axiosInstance.get('/board/details/')
        .then((response) => {
            set({ board: response.data, isLoading: false });
        }).catch((error) => {
            set({ isLoading: false });
        });
    }
}));
export default useBoardStore;

