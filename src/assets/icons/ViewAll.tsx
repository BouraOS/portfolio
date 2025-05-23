function IconViewAll({
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
      height={height || "1em"}
      width={width || "1em"}
      viewBox="0 0 16 16"
      fill={fill || "currentColor"}
    >
      <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
    </svg>
  );
}

export default IconViewAll;
