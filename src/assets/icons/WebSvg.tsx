function IconWebsite({
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
      fill={fill || "currentColor"}
      viewBox="0 0 24 24"
      height={height || "1em"}
      width={width || "1em"}
    >
      <path
        fill={fill || "currentColor"}
        fillRule="evenodd"
        d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
        clipRule="evenodd"
      />
      <path
        fill={fill || "currentColor"}
        d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
      />
      <path
        fill={fill || "currentColor"}
        fillRule="evenodd"
        d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconWebsite;
