//axios
import axios from "axios";

const FalconDex = axios.create({
    baseURL: 'http://localhost:3000/',
    header:{ 
        'Content-Type': 'application/json',
        'Accept': 'application/json',   
    }
});


export default FalconDex;