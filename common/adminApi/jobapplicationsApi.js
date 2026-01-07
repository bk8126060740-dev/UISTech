import axios from "axios";
import { handleResponse } from "./apiHandler";

export const fetchJobApplicationData = async () => {
  const request = axios.get("/api/jobapplications");
  return handleResponse(request);
};

export const postJobApplicationData = async (formData) => {
  const request = axios.post("/api/jobapplications", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  console.log(request);
  return handleResponse(request);
};

export const deleteJobApplicationData = async (id) => {
  const request = axios.delete(`/api/jobapplications/${id}`);
  return handleResponse(request);
};
