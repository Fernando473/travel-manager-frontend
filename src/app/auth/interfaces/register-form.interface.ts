export interface RegisterForm {
  identification: string;
  name: string;
  email: string;
  password: string;
  rePassword: string;
  roles: string[];
}

export interface RegisterRequest {
  identification: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
}
