import { IResult } from "../interfaces/IGetData";
import fetchData from "./fetch";

const getData = (url: string): Promise<IResult> => {
  return fetchData(url)
    .then((data) => {
      try {
        return data.json();
      } catch (error) {
        throw new Error();
      }
    })
    .catch((err) => {
      return {
        errorStatus: err.status,
        errorMessage: err.statusText || "Something went wrong!",
      };
    });
};

export default getData;
