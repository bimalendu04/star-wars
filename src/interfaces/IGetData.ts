export interface IError {
  errorStatus: string;
  errorMessage: string;
}

export interface IResult extends IError {
  next: string;
  previous: string;
  results: any[];
}
