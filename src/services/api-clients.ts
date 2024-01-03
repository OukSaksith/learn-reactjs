import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key:'a34f575b1e104a2e9be44b4f8594002c'
    }

})