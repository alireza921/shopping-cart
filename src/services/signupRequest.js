import http from "./httpService";

export function signupRequest(data) {
  return http.post("/users", data);
}
