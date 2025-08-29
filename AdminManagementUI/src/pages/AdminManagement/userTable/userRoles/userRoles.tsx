import { patchUserRoles, type User } from '../../../../api/users/usersApi';
import type { Role } from '../../../../api/roles/rolesApi';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '../../../../hooks/useToast';
import { RolesSelector } from '../../../../components/rolesSelector/rolesSelector';

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
        <RolesSelector
            id={props.user.id}
            roles={props.user.roles}
            allRoles={props.allRoles}
            handleRoleChange={(id, newRoles) => userRolesMutation.mutate({ userId: id, newRoles: newRoles })}
        />
    );
};
