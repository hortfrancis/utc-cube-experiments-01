import './Controls.css';

export default function Controls({
  onClick,
}: {
  onClick: (value: string) => void;
}) {
  return (
    <div className="controls">
      <button onClick={() => onClick('cube-01')}>Cube01</button>
      <button onClick={() => onClick('cube-02')}>Cube02</button>
      <button onClick={() => onClick('cube-03')}>Cube03</button>
    </div>
  );
}
