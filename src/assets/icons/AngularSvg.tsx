function IconAngular({ width, height }: { width?: number; height?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '1em'}
      height={height || '1em'}
      fill="none"
      viewBox="0 0 223 236">
      <g clip-path="url(#a)">
        <path
          fill="url(#b)"
          d="m222.077 39.192-8.019 125.923L137.387 0zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301zM111.039 62.675l30.357 73.803H80.681zM7.937 165.115 0 39.192 84.69 0z"
        />
        <path
          fill="url(#c)"
          d="m222.077 39.192-8.019 125.923L137.387 0zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301zM111.039 62.675l30.357 73.803H80.681zM7.937 165.115 0 39.192 84.69 0z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="49.009"
          x2="225.829"
          y1="213.75"
          y2="129.722"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#E40035" />
          <stop offset=".24" stop-color="#F60A48" />
          <stop offset=".352" stop-color="#F20755" />
          <stop offset=".494" stop-color="#DC087D" />
          <stop offset=".745" stop-color="#9717E7" />
          <stop offset="1" stop-color="#6C00F5" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="41.025"
          x2="156.741"
          y1="28.344"
          y2="160.344"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF31D9" />
          <stop offset="1" stop-color="#FF5BE1" stop-opacity="0" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h223v236H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconAngular;
