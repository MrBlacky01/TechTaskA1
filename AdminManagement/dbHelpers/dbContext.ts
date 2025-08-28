import { Role } from "../models/role";
import { User } from "../models/User";

export interface DB {
    users: User[];
    roles: Role[];
}