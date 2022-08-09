import {user } from './user';

export interface loginResponse {
    user: user,
    token:string,
    success: boolean,
    message: string
}