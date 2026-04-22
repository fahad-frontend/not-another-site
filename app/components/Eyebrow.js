export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={`eyebrow text-neutral-500 ${className}`}>{children}</div>
  );
}
