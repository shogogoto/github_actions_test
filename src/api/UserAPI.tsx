import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:8000/users"
});

class UserAPI{
  static register(){
    // instance.post("")

  }

}


export default UserAPI;
