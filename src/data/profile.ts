// 掲載内容はすべて外向けに抽象化したもの（社名・顧客名・人名・未リリースの日程は載せない）

export const profile = {
  name: "unwissenheit",
  reading: "ウンヴィッセンハイト",
  handle: "unwissenheit",
  role: "Backend Engineer",
  tagline: "学びながら、手を動かし続ける。",
  summary:
    "京都で大学入試の Web システムの開発に携わっているエンジニアです。業務の外では、開発環境を整えたり、自分の VPS でサービスを動かしたりしながら、少しずつ技術を学んでいます。",
  github: "https://github.com/unwissenheit",
  qiita: "https://qiita.com/unwissenheit",
  email: "unwissenheit.tech@gmail.com",
  location: "Kyoto, Japan",
};

export const about = {
  paragraphs: [
    "はじめまして、unwissenheit（ウンヴィッセンハイト）と申します。ドイツ語で「無知」という意味の言葉です。ご覧いただき、ありがとうございます。",
    "佐賀大学と大学院で情報工学を学んだあと、京都で大学入試の Web システムの開発に携わっています。仕事では、お客さまの「なぜそうしたいのか」をていねいに伺い、その思いを形にすることを大切にしています。",
    "新しい技術に触れることが好きで、休日も開発環境を整えたり、自分のサーバーでサービスを動かしたりしながら、少しずつ学んでいます。まだまだ勉強中のことばかりですが、一緒に働く方に安心して任せていただけるよう、一歩ずつ成長していきたいと考えています。",
  ],
  hobbies: [
    { emoji: "⛏️", label: "Minecraft の建築" },
    { emoji: "🏕️", label: "キャンプ・SUP" },
    { emoji: "🍞", label: "パン作り" },
    { emoji: "🍓", label: "Raspberry Pi いじり" },
  ],
};

export type Experience = {
  period: string;
  title: string;
  body: string;
  tech: string[];
};

export const experiences: Experience[] = [
  {
    period: "2026 —",
    title: "AI 駆動開発の導入 PoC",
    body: "生成 AI を使った開発プロセスを社内に導入するための検証を推進。",
    tech: ["Claude Code"],
  },
  {
    period: "2025 —",
    title: "産学連携共創プラットフォーム（新規開発）",
    body: "大学・企業・学生をつなぐ Web プラットフォーム。PM 的な役割と連携 API の設計を担当。",
    tech: [".NET Blazor", "Azure", "SQL Server"],
  },
  {
    period: "2025",
    title: "高大連携システム（機能追加）",
    body: "高校生と大学をつなぐスカウト・チャット機能。設計から実装・テストまでを担当。",
    tech: ["C#", "ASP.NET MVC", "SQL Server"],
  },
  {
    period: "2024 —",
    title: "大学入試出願システム",
    body: "ネット出願から合否発表・入学手続きまでを提供する自社パッケージの開発・保守。",
    tech: ["C#", "ASP.NET MVC", "SQL Server"],
  },
];

export const education = [
  {
    period: "2022 — 2024",
    title: "佐賀大学大学院 理工学研究科 知能情報工学専攻 修了（修士）",
    thesis: "輻輳制御アルゴリズムを模したSAGABCにおける仮想通貨送付量の最適化アルゴリズム",
    abstract:
      "ネットワークの輻輳制御アルゴリズムの考え方を仮想通貨の送付に取り入れ、状況に応じて送付量を調整・最適化するアルゴリズムを提案しました。",
    note: "研究室サーバーの管理を担当し、Nginx と Docker で学生の Web サービスの基盤を運用",
  },
  {
    period: "— 2022",
    title: "佐賀大学 卒業",
    thesis: "表情認識と話題検知から発話を促進する傾聴対話システムの開発",
    abstract:
      "話し手の表情の認識と、会話の話題の検知を組み合わせて応答を選び、相手が話しやすくなるよう発話を促す傾聴対話システムを開発しました。",
    note: "",
  },
];

export const skills = {
  実務: ["C#", ".NET MVC", ".NET Blazor", "SQL Server", "Azure"],
  個人開発: ["Go", "Python", "TypeScript", "React", "Vue.js", "Next.js", "Docker", "Linux"],
};

export type Work = {
  title: string;
  description: string;
  details?: string[];
  tags: string[];
  href?: string;
  status?: string;
  size: "lg" | "md";
};

export const works: Work[] = [
  {
    title: "dotfiles",
    description:
      "chezmoi で管理している開発環境の設定。新しいマシンでも同じ環境をすぐに再現できるようにしています。",
    details: [
      "Neovim を C# / .NET の開発環境に（Roslyn LSP・テスト実行・デバッグ・保存時フォーマット）",
      "Go・React 向けの LSP・フォーマッタも同じ設定で",
      "WezTerm・zsh・Karabiner の設定",
      "SSH 鍵などの秘密情報はリポジトリに含めず、パスワードマネージャーで管理",
    ],
    tags: ["chezmoi", "Neovim", "Lua", "WezTerm"],
    href: "https://github.com/unwissenheit/dotfiles",
    size: "lg",
  },
  {
    title: "個人サーバー",
    description:
      "VPS（Ubuntu）に Nginx と Docker で複数のサービスを載せ、独自ドメイン・HTTPS で運用しています。このサイトもここで動いています。",
    tags: ["Ubuntu", "Nginx", "Docker"],
    size: "md",
  },
  {
    title: "photo share app",
    description: "写真を共有する Web アプリ。設計から公開まで個人で進めています。",
    tags: ["Next.js", "Docker"],
    status: "Coming soon",
    size: "md",
  },
];
