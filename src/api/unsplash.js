import axios from "axios";

const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";

export default axios.create({
  baseURL: `${PROXY_URL}https://api.unsplash.com`,
  headers: {
    Authorization: "Client-ID bK3C89BSo1Vcay9VZBB_Azmr7zO8_B8qrnhb4shhDAU",
  },
});
