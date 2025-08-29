import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import type { User } from '../../../api/users/usersApi';
import type { Role } from '../../../api/roles/rolesApi';
import { UserRoles } from './userRoles/userRoles';
import { RolesFilter } from './rolesFilter/rolesFilter';

interface Props {
    usersList: User[];
    allRoles: Role[];
}

export const UserTable = ({ usersList, allRoles }: Props) => {
    const [users, setUsers] = useState<User[]>(usersList);
    const [filterRoles, setFilterRoles] = useState<number[]>([]);

    const handleUserRolesChange = (userId: number, newRoles: number[]) => {
        setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, roles: newRoles } : u)));
    };

    const handleFilterRolesChange = (newRoles: number[]) => {
        setFilterRoles(newRoles);
    };
    const filteredUsers = filterRoles.length ? users.filter((u) => filterRoles.some((role) => u.roles.includes(role))) : users;
    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Name</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Email</strong>
                        </TableCell>
                        <TableCell>
                            <RolesFilter allRoles={allRoles} selectedRoles={filterRoles} handleRolesChange={handleFilterRolesChange} />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <UserRoles user={user} allRoles={allRoles} handleRoleChange={handleUserRolesChange} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
