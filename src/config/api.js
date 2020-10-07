import axios from "axios";

export const conexionApiCovid = axios.create({
    baseURL: process.env.REACT_APP_URL_COVID19,
    headers: {
        "Content-type": "application/json",
    },
});
