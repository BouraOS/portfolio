function IconMobile({
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
      viewBox="0 0 16 16"
      fill={fill || "currentColor"}
      height={height || "1em"}
      width={width || "1em"}
    >
      <path
        fill={fill || "currentColor"}
        d="M11.5 0h-7C3.675 0 3 .675 3 1.5v13c0 .825.675 1.5 1.5 1.5h7c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM6 .75h4v.5H6v-.5zM8 15a1 1 0 110-2 1 1 0 010 2zm4-3H4V2h8v10z"
      />
    </svg>
  );
}

export default IconMobile;
