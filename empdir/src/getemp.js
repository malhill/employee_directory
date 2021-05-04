//Imports
import axios from 'axios';

// export default async function getEmp() {
//     const response = await axios.get("https://randomuser.me/api/?results=5");
//     // const data = await response.json();
//     return response;
// }

export default function getEmp() {
    return axios.get("https://randomuser.me/api/?results=6&nat=us");
}