import { Select, MenuItem, FormControl, InputLabel, Chip, Box, OutlinedInput } from '@mui/material';
import type { Role } from '../../api/roles/rolesApi';

interface RolesSelectorProps {
    id: number;
    roles: number[];
    allRoles: Role[];
    handleRoleChange: (id: number, newRoles: number[]) => void;
}
export const RolesSelector = (props: RolesSelectorProps) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`roles-label-${props.id}`}>Roles</InputLabel>
            <Select
                labelId={`roles-label-${props.id}`}
                multiple
                value={props.roles}
                onChange={(e) => props.handleRoleChange(props.id, e.target.value as number[])}
                input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {(selected as number[]).map((roleId) => {
                            const role = props.allRoles.find((r) => r.id === roleId);
                            return <Chip key={roleId} label={role?.name ?? roleId} size="small" />;
                        })}
                    </Box>
                )}
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
