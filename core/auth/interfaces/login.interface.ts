export interface UserData {
  fullName: string;
  id: string;
  email: string;
  userName: string;
  phone: string;
  address: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  response: UserData;
}
