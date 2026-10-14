// Qiita のロゴ風アイコン（緑の角丸に Q）
export function QiitaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <rect width="24" height="24" rx="6" fill="#55C500" />
      <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">Q</text>
    </svg>
  );
}
