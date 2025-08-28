import axiosClient from "../axiosClient";

export interface Role {
    id: number;
    name: string;
}

export const getRoles = async (): Promise<Role[]> => {
  const res = await axiosClient.get<Role[]>("/roles");
  return res.data;
};