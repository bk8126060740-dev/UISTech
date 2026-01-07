import axios from "axios";
import { handleResponse } from "./apiHandler";


export const fetchProfessionData = async () => {
    const request = axios.get('/api/professionType');
    return handleResponse(request);
}
export const postProfessionData = async (payload) => {
    const request = axios.post('/api/professionType', payload);
    return handleResponse(request);
}
export const updateProfessionData = async (id, payload) => {
    const request = axios.put(`/api/professionType/${id}`, payload);
    return handleResponse(request);
}
export const deleteProfessionData = async (id) => {
    const request = axios.delete(`/api/professionType/${id}`);
    return handleResponse(request);
}