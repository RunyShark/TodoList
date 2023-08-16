import { v4 } from 'uuid';

class HelperService {
  uuid(): string {
    return v4();
  }
}

export const helperService = new HelperService();
