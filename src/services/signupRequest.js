import http from "./httpService";

export function signupRequest(data) {
  return http.post("/user/register", data);
}
