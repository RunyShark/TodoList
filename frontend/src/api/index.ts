import Axios from 'axios';

export const enum HTTP_METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
}

export interface IHttps {
  type: HTTP_METHOD;
  endpoint: string;
  payload: string;
  config: string;
}

export class ApiService {
  private static instance: ApiService;
  private api = Axios.create({ baseURL: '' });

  constructor() {
    return ApiService.instance || (ApiService.instance = this);
  }

  //Todo type T props: IHttps
  public async https() {
    // try {
    // } catch (error) {
    // } finally {
    // }
  }
}
