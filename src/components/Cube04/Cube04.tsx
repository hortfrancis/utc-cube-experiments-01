import { useState } from 'react';
import './Cube04.css';
import Face04 from '../Face04/Face04';

export default function Cube04() {
  const [cubeSize, setCubeSize] = useState(200);
  const [faceDistance, setFaceDistance] = useState(100); // Initial value = half of cube size
  const [gridGap, setGridGap] = useState(6.7); // Initial value approximates cubeSize/30

  return (
    <div className='scene-04' style={{
      "--cube-size": `${cubeSize}px`,
      "--face-distance": `${faceDistance}px`,
      "--cube-gap": `${gridGap}px`,
    } as React.CSSProperties}>
      <div className="cube-04">
        <div className="face front">
          <Face04 />
        </div>
        <div className="face left">
          <Face04 />
        </div>
        <div className="face back">
          <Face04 />
        </div>
        <div className="face right">
          <Face04 />
        </div>
        <div className="face top">
          <Face04 />
        </div>
        <div className="face bottom">
          <Face04 />
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '-180px', width: '100%' }}>
        <div>
          <label style={{ background: 'rgba(255, 255, 255, 0.75', padding: '0.5em' }} >Cube Size: {cubeSize}px</label>
          <input
            type="range"
            min="100"
            max="400"
            value={cubeSize}
            onChange={(e) => setCubeSize(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label style={{ background: 'rgba(255, 255, 255, 0.75', padding: '0.5em' }}>Face Distance: {faceDistance}px</label>
          <input
            type="range"
            min="0"
            max={cubeSize}
            value={faceDistance}
            onChange={(e) => setFaceDistance(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label style={{ background: 'rgba(255, 255, 255, 0.75', padding: '0.5em' }}>Grid Gap: {gridGap}px</label>
          <input
            type="range"
            min="0"
            max="30"
            step="0.5"
            value={gridGap}
            onChange={(e) => setGridGap(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
