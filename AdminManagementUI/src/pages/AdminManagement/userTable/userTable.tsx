// src/components/UserTable.tsx
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    Box,
} from '@mui/material';
import type { User } from '../../../api/users/usersApi';
import type { Role } from '../../../api/roles/rolesApi';

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
                                <FormControl fullWidth size="small">
                                    <InputLabel id={`roles-label-${user.id}`}>Roles</InputLabel>
                                    <Select
                                        labelId={`roles-label-${user.id}`}
                                        multiple
                                        value={user.roles}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value as number[])}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as number[]).map((roleId) => {
                                                    const role = allRoles.find((r) => r.id === roleId);
                                                    return <Chip key={roleId} label={role?.name ?? roleId} size="small" />;
                                                })}
                                            </Box>
                                        )}
                                    >
                                        {allRoles.map((role) => (
                                            <MenuItem key={role.id} value={role.id}>
                                                {role.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
