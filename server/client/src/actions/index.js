import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async distpatch => {
    const res = await axios.get('/api/current_user');

    distpatch({type: FETCH_USER, payload: res.data});
};

