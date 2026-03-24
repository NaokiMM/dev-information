■ Q：オブジェクト指向と手続き型プログラミングのメリットは何ですか？

■ 手続き型プログラミング
✅ メリット
シンプルで理解しやすい
処理の流れが追いやすい
小規模な処理に向いている

❌ デメリット
データと処理が分かれているため管理が難しくなる
規模が大きくなるとコードが複雑になりやすい
再利用性・拡張性が低い

$name = "Naoki";

function getGreeting($name) {
    return "Hello, " . $name;
}

echo getGreeting($name);

----------------------------------------

■ オブジェクト指向
✅ メリット
保守性が高い（変更に強い）
再利用しやすい（クラス使い回し）
拡張しやすい（継承・ポリモーフィズム）

❌ デメリット
設計が難しい
学習コストが高い
小規模だと逆に冗長になる

class User {
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function getGreeting() {
        return "Hello, " . $this->name;
    }
}

$user = new User("Naoki");
echo $user->getGreeting();