import './Cube01.css';
import Face01 from '../Face01/Face01';

export default function Cube01() {


  return (
    <div className='scene-01'>
      <div className="cube-01">
        <div className="face front">
          <Face01 />
        </div>
        <div className="face back">
          <Face01 />
        </div>
        <div className="face left">
          <Face01 />
        </div>
        <div className="face right">
          <Face01 />
        </div>
        <div className="face top">
          <Face01 />
        </div>
        <div className="face bottom">
          <Face01 />
        </div>
      </div>
    </div >
  );
}
