import { connect } from "mongoose";
const url = "mongodb://127.0.0.1:27017/auth";

export const mainConnection = async () => {
  try {
    await connect(url).then(() => {
      console.log("db is connected ");
    });
  } catch (error) {
    console.log(error);
  }
};
