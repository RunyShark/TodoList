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
  private api = Axios.create({ baseURL: import.meta.env.VITE_API_URL });
  private endpoint = '/todo';

  get getEndpoint() {
    return this.endpoint;
  }

  constructor() {
    return ApiService.instance || (ApiService.instance = this);
  }

  public async https({ endpoint, payload, type }: IHttps) {
    try {
      return await this.api[type](endpoint, payload);
    } catch (error) {
      console.log(error);
    }
  }
}
