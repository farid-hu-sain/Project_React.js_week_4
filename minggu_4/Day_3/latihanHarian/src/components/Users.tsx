import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import type { RootState, AppDispatch } from "../app/store";


export default function Users() {
  const { data, loading, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">Users List</h2>
      <ul className="list-disc pl-5">
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
