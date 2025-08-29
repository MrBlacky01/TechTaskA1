import type { AxiosResponse } from "axios";
import axiosClient from "../axiosClient";

export interface User {
    id: number;
    name: string;
    email: string;
    roles: number[];
}

export const getUsers = async (): Promise<User[]> => {
  const res = await axiosClient.get<User[]>("/users");
  return res.data;
};

export const patchUserRoles = (userId: number, newRoles: number[]): Promise<AxiosResponse<User>> => {
  return axiosClient.patch<User>(`/users/${userId}/roles`, {roles: newRoles});
}