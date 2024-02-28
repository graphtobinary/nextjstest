const CheckBoxIcon: React.FunctionComponent<{
  className?: string;
  width?: string;
  height?: string;
  fillOuter?: string;
  fillInner?: string;
}> = ({
  className = '',
  width = '16',
  height = '16',
  fillOuter = 'white',
  fillInner = 'grey',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill={fillInner} />
    <path
      d="M12 5L6.5 10.5L4 8"
      stroke={fillOuter}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke={fillOuter} />
  </svg>
);

export default CheckBoxIcon;
