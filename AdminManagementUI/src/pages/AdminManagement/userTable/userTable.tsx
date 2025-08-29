// src/components/UserTable.tsx
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import type { User } from '../../../api/users/usersApi';
import type { Role } from '../../../api/roles/rolesApi';
import { UserRoles } from './userRoles/userRoles';

interface Props {
    usersList: User[];
    allRoles: Role[];
}

export const UserTable = ({ usersList, allRoles }: Props) => {
    const [users, setUsers] = useState<User[]>(usersList);

    const handleRoleChange = (userId: number, newRoles: number[]) => {
        setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, roles: newRoles } : u)));
    };

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
                            <strong>Roles</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <UserRoles user={user} allRoles={allRoles} handleRoleChange={handleRoleChange} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
