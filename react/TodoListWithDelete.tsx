// 問題文
// React コンポーネント FetchUsers を実装してください。
// このコンポーネントは、マウント時に API からユーザー一覧を取得し、名前を表示する必要があります。
// API: https://jsonplaceholder.typicode.com/users
//表示要件は次の通りです。
// 読み込み中は Loading...
// 取得成功時はユーザー名一覧を表示
// 取得失敗時は Failed to fetch users
// useEffect と fetch を使って実装してください。

// 例題
// Output while loading
// Loading...
// Output after success
// Leanne Graham
// Ervin Howell
// Clementine Bauch
// ...
// --------------------------------
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function FetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}