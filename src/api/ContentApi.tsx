import axios, { AxiosInstance } from "axios";
import client from "./utils";


export default class ContentApi{
  private static client: AxiosInstance = client

  static get(): string {
    client.get("contents")
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => console.log("err"));
    return "a";
  }

  static register(){
    // instance.post("")

  }

}


