export interface AuthStateType {
  isLoggedIn: boolean;
  authStatus: string | null;
  loggedInUser: LoggedInUserType | null;
}

export interface LoggedInUserType {
  userId: string;
  name: string;
  email: string;
  role: string;
}

export interface loginType {
  email: string;
  password: string;
}

export interface signupType {
  name: string;
  email: string;
  password: string;
}

export interface verifyUserType {
  otp: string;
  token?: string | null;
}

export interface ActionPayloadType{
    status: string, 
    message: string,
    data?: any,
    totalCount?:any
}

export interface signinWithGoogleType{
  name:string | null, 
  email:string | null, 
  uid:string,
  photoURL:string | null
}
