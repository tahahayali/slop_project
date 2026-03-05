import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

export const logout = async () => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/logout`);
        if (res.status === 200) {
            return true;
        }
        else {
            return false;
    }
    }
    catch (error) {
        console.error("Logout error: " + error);
        return false;
    }
};

