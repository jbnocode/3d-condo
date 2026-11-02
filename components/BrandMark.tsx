export default function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-extrabold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#d4a017" />
        <path
          d="M7 15.5V9.2c0-.7.4-1.2 1-1.2h.2L12 12l3.8-4c.6 0 1 .5 1 1.2v6.3"
          stroke="#0c0d10"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      ShowUnit
    </span>
  );
}
