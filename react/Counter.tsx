// 問題文
// 整数 initial が与えられます。
// React コンポーネント Counter を実装してください。

// このコンポーネントは次の機能を持つ必要があります。
// 現在のカウントを表示する
// Increment ボタンを押すと count を 1 増やす
// Decrement ボタンを押すと count を 1 減らす
// useState を使って実装してください。

// 例題
// Input
// <Counter initial={0} />
// Actions
// Increment
// Increment
// Decrement

// Output
// Count: 1
// 回答コード
// --------------------------------
import React, { useState } from "react";

// CounterProps型を定義
// React + TypeScript では props の型を定義
type CounterProps = {
  // initialは数値というルール
  initial: number;
};

// メインコンポーネントを定義
// CounterProps は「引数の型（ルール）」で、initial はその引数の中にある値（number）です。
// 引数はオブジェクトで、そのオブジェクトの中の initial が数値
// Reactでは props は必ずオブジェクトで受け取る
// 今後 props が増えても管理しやすくするために type を作っている
export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}