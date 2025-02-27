import axios from "axios";

export class Api {
  serverUrl = "https://syneris-backend.vercel.app/";

  async contact(data) {
    return await axios.post(this.serverUrl + "contact/direct", data);
  }

  async appointment(data) {
    return await axios.post(this.serverUrl + "booking/appointment", data);
  }
}
