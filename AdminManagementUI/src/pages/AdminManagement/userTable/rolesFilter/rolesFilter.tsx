import { useEffect, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { RolesSelector } from '../../../../components/rolesSelector/rolesSelector';
import type { Role } from '../../../../api/roles/rolesApi';

interface RolesFilterProps {
    allRoles: Role[];
    selectedRoles: number[];
    handleRolesChange: (newRoles: number[]) => void;
}

export const RolesFilter = (props: RolesFilterProps) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    useEffect(() => {
        if (!showFilter && props.selectedRoles.length) {
            props.handleRolesChange([]);
        }
    }, [props, showFilter]);
    return (
        <>
            <Box display="flex" alignItems="center" gap={1}>
                <strong>Roles</strong>
                <Tooltip title="Filter by roles">
                    <IconButton size="small" onClick={() => setShowFilter((prev) => !prev)}>
                        <FilterListIcon color={showFilter || props.selectedRoles.length ? 'primary' : 'inherit'} />
                    </IconButton>
                </Tooltip>
            </Box>
            {showFilter && (
                <RolesSelector
                    id={-1}
                    allRoles={props.allRoles}
                    roles={props.selectedRoles}
                    handleRoleChange={(_, newRoles) => props.handleRolesChange(newRoles)}
                />
            )}
        </>
    );
};
