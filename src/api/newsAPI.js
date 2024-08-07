import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://wifeed.vn/api/tin-tuc/thi-truong',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getNews = async (page = 1, limit = 10) => {
    try {
        const response = await axiosClient.get(`?apikey=demo&page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};
