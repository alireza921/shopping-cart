import http from "./httpService";

export function loginRequest (data) { 
    return http.post("/users/login", data);
}
