import axios from "axios";

let url = "http://localhost:4000";

export function getProducts(){
    return axios.get( `${url}/products` )
    .then(response => response.data)
}