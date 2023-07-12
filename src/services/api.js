import axios from "axios";

//we separate base utl to  use different endpoints easily
// const Base_URL = "https://api.escuelajs.co/api/v1";
const Base_URL = "https://fakestoreapi.com";

// asynchronous function 
const getProducts = async () =>{
    // send request to products endpoint
    const response = await axios.get(`${Base_URL}/products`);
    return response.data;
};

// const getUsers = async () =>{
//     const response = await axios.get(`${Base_URL}/users`);
//     return response.data;
// }

// export { getProducts , getUsers}

export {getProducts};