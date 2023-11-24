import axios from "axios";
const url = "http://localhost:1414/api/v1";

export const createFremo = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user-freemo`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const createBromo = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user-bromo`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const createPremo = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user-premo`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const loginAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/login-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
