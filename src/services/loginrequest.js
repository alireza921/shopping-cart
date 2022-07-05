import http from "./httpService";

export const loginRequest = (data) => http.post("/users/login", data);
