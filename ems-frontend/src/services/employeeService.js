import axios from "axios";

const API_URL = "http://localhost:8080/employee/all";

export const getAllEmployees = () => {
    return axios.get(API_URL);
};