export interface User {
  id: string;
  email: string | undefined;
  password: string | undefined;
  google_id: string | undefined;
  facebook_id: string | undefined;
}

export interface AddLog {
  weight: number;
  calories: number | undefined;
  date: string;
}

export interface Log {
  weight: number;
  calories: number | undefined;
  date: Date;
  id: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface SignUp {
  email: string;
  password: string;
}
