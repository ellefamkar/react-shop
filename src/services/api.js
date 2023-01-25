import axios from "axios";

const Base_URL = "https://fakestoreapi.com";

const getProducts = async () =>{
    const response = await axios.get(`${Base_URL}/products`);
    return response.data;
};

export {getProducts};