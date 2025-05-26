import './Controls.css';

export default function Controls({
  onClick,
}: {
  onClick: (value: string) => void;
}) {
  return (
    <div className="controls">
      <button onClick={() => onClick('cube-01')}>Cube01</button>
    </div>
  );
}
