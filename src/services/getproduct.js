import http from "./httpService";

export function getProduct() { 
    return http.get ('/users')
}