interface Props {
  className?: string;
}
const RingSvg: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <svg className="progress-ring" width="32" height="32">
      <circle
        className="progress-ring__circle"
        stroke="#ca9e4a"
        strokeWidth="2"
        fill="transparent"
        r="14"
        cx="16"
        cy="16"
      />
    </svg>
  </div>
);

export default RingSvg;
