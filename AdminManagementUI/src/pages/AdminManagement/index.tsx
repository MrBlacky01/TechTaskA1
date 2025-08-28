import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/users/usersApi";

export default function AdminManagement() {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    }, );
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching users</p>;
    return (
    <ul>
      {users?.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}