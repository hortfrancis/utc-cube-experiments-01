import './Controls.css';

export default function Controls({
  currentCube,
  onClick,
}: {
  currentCube: string;
  onClick: (value: string) => void;
}) {
  return (
    <div className="controls">
      <button onClick={() => onClick('cube-01')} data-selected={currentCube === 'cube-01' ? true : undefined}>Cube01</button>
      <button onClick={() => onClick('cube-02')} data-selected={currentCube === 'cube-02' ? true : undefined}>Cube02</button>
      <button onClick={() => onClick('cube-03')} data-selected={currentCube === 'cube-03' ? true : undefined}>Cube03</button>
      <button onClick={() => onClick('cube-04')} data-selected={currentCube === 'cube-04' ? true : undefined}>Cube04</button>
    </div>
  );
}
