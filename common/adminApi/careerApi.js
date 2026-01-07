import axios from "axios";
import { handleResponse } from "./apiHandler";

export const fetchCareerData = async () => {
    const request = axios.get('/api/career');
    return handleResponse(request);
}
export const postCareerData = async (payload) => {
    const request = axios.post('/api/career', payload);
    return handleResponse(request);
}
export const updateCareerData = async (id, payload) => {
    const request = axios.put(`/api/career/${id}`, payload);
    return handleResponse(request);
}
export const deleteCareerData = async (id) => {
    const request = axios.delete(`/api/career/${id}`);
    return handleResponse(request);
}