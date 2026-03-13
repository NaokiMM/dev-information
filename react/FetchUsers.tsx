// 問題文
// 文字列 placeholder が与えられます。
// React コンポーネント LivePreview を実装してください。
// このコンポーネントは次の機能を持つ必要があります。
// テキスト入力欄を表示する
// 入力中の文字列をリアルタイムで画面に表示する
// useState と onChange を使って実装してください。

// 例題
// Input
// <LivePreview placeholder="Type here" />
// Input Action
// hello
// Output
// Preview: hello
// 回答コード
// --------------------------------
import React, { useState } from "react";

type LivePreviewProps = {
  placeholder?: string;
};

export default function LivePreview({
  placeholder = "Type here",
}: LivePreviewProps) {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <input
        value={text}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <p>Preview: {text}</p>
    </div>
  );
}