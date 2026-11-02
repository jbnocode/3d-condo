export default function Disclaimer({ text }: { text: string }) {
  return (
    <p className="pointer-events-none max-w-[min(92vw,720px)] text-center text-[10px] leading-snug text-white/55 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] md:text-[11px]">
      {text}
    </p>
  );
}
