export interface IGetAuthorization {
  id: string;
  email: string | undefined;
  password: string | undefined;
  google_id: string | undefined;
  facebook_id: string | undefined;
}

export interface IAddLog {
  weight: number;
  calories: number | undefined;
  date: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
}
