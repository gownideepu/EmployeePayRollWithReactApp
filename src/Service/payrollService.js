import axios from 'axios';

class PayrollServices{
    baseUrl = "http://localhost:8080";

    addEmployee(data) {
        return axios.post( `http://localhost:8080/add`,data);
    }
}

export default new PayrollServices();