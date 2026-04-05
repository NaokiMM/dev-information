import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("カウンターが正しく動く", () => {
  render(<Counter initial={0} />);

  // 初期状態
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  // Increment ×2
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Increment"));

  // Decrement ×1
  fireEvent.click(screen.getByText("Decrement"));

  // 最終結果
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});