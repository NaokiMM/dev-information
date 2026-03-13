// 問題文
// React コンポーネント TodoList を実装してください。
// このコンポーネントは次の機能を持つ必要があります。
// 入力欄にタスク名を入力できる
// Add ボタンでタスクを追加する
// 追加したタスクを一覧表示する
// 空文字または空白だけの入力は追加しない
// useState を使い、配列表示には map を使ってください。

// 例題
// Actions
// input = "Study React"
// click Add
// input = "Go shopping"
// click Add
// Output
// - Study React
// - Go shopping
// --------------------------------
import React, { useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setTodos((prev) => [...prev, trimmed]);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}