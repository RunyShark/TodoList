import Axios from 'axios';
import { Todo } from '../store/slices/Todo/TodoSlice';

export enum HTTP_METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export enum Endpoint {
  TODO = '/todo',
}

export interface IHttps {
  type?: HTTP_METHOD;
  endpoint: string;
  payload?: Partial<Todo>;
  config?: string;
}

class ApiService {
  private api = Axios.create({ baseURL: import.meta.env.VITE_API_URL });

  public async https({ endpoint, type = HTTP_METHOD.GET, payload }: IHttps) {
    try {
      return await this.api[type](endpoint, payload);
    } catch (error) {
      console.log(error);
    }
  }
}

export const apiService = new ApiService();
