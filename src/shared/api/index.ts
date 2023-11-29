import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjRiZDdkM2NjNGI1ZDI0MzQ5OTMxMSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMTExMTU2OSwiZXhwIjoxNzAxMTE4NzY5fQ.QJcPvvH2fjz65lby1dGn05NyOr8n-OaqGww2UBr6mME',
    },
});

export default api;
