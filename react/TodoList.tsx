// 問題文
// React コンポーネント TodoListWithDelete を実装してください。
// このコンポーネントは次の機能を持つ必要があります。
// タスクを追加できる
// 各タスクの横に Delete ボタンを表示する
// Delete ボタンを押すと、そのタスクだけ削除される
// 削除処理には filter を使ってください。

// 例題
// Actions
// Add "A"
// Add "B"
// Delete "A"
// Output
// - B
// --------------------------------
import React, { useState } from "react";

export default function TodoListWithDelete() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    // 入力された文字列をtrimして、空文字列の場合はreturn
    const trimmed = input.trim();
    if (!trimmed) return;

    setTodos((prev) => [...prev, trimmed]);
    setInput("");
  };

  const handleDelete = (targetIndex: number) => {
    setTodos((prev) => prev.filter((_, index) => index !== targetIndex));
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
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}