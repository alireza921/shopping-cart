import http from "./httpService";

export const signupRequest = (data) => http.post("/users/signup", data);
