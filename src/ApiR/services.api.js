import axios from "axios";

export const createServices = async (dataServicis) => 
    await axios.post("http://localhost:1022/api/postServicesRegister",dataServicis)
