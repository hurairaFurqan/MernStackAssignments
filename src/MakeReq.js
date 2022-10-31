import { API_BASEURL_USERS } from "./context/constants";

const makeReq = (token) => {
  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${API_BASEURL_USERS}/admin`, config).then(async (res) => {
      const data = await res.json();
      console.log(`data`, data);
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
  }
};

export default makeReq;
