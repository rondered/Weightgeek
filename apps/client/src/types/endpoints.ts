export interface IGetAuthorization {
  id: string;
  email: string | undefined;
  password: string | undefined;
  google_id: string | undefined;
  facebook_id: string | undefined;
}
