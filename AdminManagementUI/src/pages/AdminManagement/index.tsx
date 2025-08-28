import { useQueries } from '@tanstack/react-query';
import { getUsers } from '../../api/users/usersApi';
import UserTable from './userTable/userTable';
import { getRoles } from '../../api/roles/rolesApi';
import { Loader } from '../../components/loader/loader';

export default function AdminManagement() {
    const [usersQuery, rolesQuery] = useQueries({
        queries: [
            {
                queryKey: ['users'],
                queryFn: getUsers,
            },
            {
                queryKey: ['roles'],
                queryFn: getRoles,
            },
        ],
    });
    if (usersQuery.isLoading || rolesQuery.isLoading) return <Loader />;
    if (usersQuery.error || rolesQuery.error) return <p>Error fetching data</p>;
    return <UserTable usersList={usersQuery.data || []} allRoles={rolesQuery.data || []} />;
}
