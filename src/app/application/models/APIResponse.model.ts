export interface APIResponseModel<data> {
  data: any;
  success: boolean;
  message: string;
  statusCode: number;
}
