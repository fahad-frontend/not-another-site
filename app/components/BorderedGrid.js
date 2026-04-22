export default function BorderedGrid({ children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 border
        [&>*]:border-b [&>*]:border-[currentColor]
        md:[&>*]:border-r
        md:[&>*:nth-child(2n)]:border-r-0
        md:[&>*:nth-last-child(-n+2)]:border-b-0
        [&>*:last-child]:border-b-0
        ${className}`}
      style={{ borderColor: "currentColor" }}
    >
      {children}
    </div>
  );
}
