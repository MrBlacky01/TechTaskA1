import { Select, MenuItem, FormControl, InputLabel, Chip, Box } from '@mui/material';
import { patchUserRoles, type User } from '../../../../api/users/usersApi';
import type { Role } from '../../../../api/roles/rolesApi';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '../../../../hooks/useToast';

interface UserRolesProps {
    user: User;
    allRoles: Role[];
    handleRoleChange: (userId: number, newRoles: number[]) => void;
}
export const UserRoles = (props: UserRolesProps) => {
    const { showToast } = useToast();

    const userRolesMutation = useMutation({
        mutationFn: ({ userId, newRoles }: { userId: number; newRoles: number[] }) => {
            props.handleRoleChange(userId, newRoles);
            return patchUserRoles(userId, newRoles);
        },
        onSuccess: () => {},
        onError: (err) => {
            showToast(err.message);
        },
    });

    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`roles-label-${props.user.id}`}>Roles</InputLabel>
            <Select
                labelId={`roles-label-${props.user.id}`}
                multiple
                value={props.user.roles}
                onChange={(e) => userRolesMutation.mutate({ userId: props.user.id, newRoles: e.target.value as number[] })}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {(selected as number[]).map((roleId) => {
                            const role = props.allRoles.find((r) => r.id === roleId);
                            return <Chip key={roleId} label={role?.name ?? roleId} size="small" />;
                        })}
                    </Box>
                )}
                disabled={userRolesMutation.isPending}
            >
                {props.allRoles.map((role) => (
                    <MenuItem key={role.id} value={role.id}>
                        {role.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
