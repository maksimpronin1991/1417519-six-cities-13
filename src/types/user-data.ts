import { Host } from './offer';

export type UserData = {
  email: string;
  token: string;
} & Host;
