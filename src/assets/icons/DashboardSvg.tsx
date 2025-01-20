function IconDashboard({
  width,
  height,
  fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill || "currentColor"}
      height={height || "1em"}
      width={width || "1em"}
    >
      <path d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10z" />
    </svg>
  );
}

export default IconDashboard;
