import {UserDTO} from './UserDTO';

export class LoginServiceResponse {
  code: number;
  message: string;
  data: UserDTO;
}

