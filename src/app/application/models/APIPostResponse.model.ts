export interface APIPostResponseModel<T> {
  data: T;
  success: boolean;
  message: string;
  statusCode: number;
}
