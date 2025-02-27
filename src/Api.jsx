import axios from "axios";

export class Api {
  serverUrl = "http://127.0.0.1:3000/";

  async contact(data) {
    return await axios.post(this.serverUrl + "contact/direct", data);
  }

  async appointment(data) {
    return await axios.post(this.serverUrl + "booking/appointment", data);
  }
}
