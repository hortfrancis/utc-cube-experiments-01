import './Cube03.css';
import Face03 from '../Face03/Face03';

export default function Cube03() {


  return (
    <div className='scene-03'>
      <div className="cube-03">
        <div className="face front">
          <Face03 />
        </div>
        <div className="face left">
          <Face03 />
        </div>
        <div className="face back">
          <Face03 />
        </div>
        <div className="face right">
          <Face03 />
        </div>
        <div className="face top">
          <Face03 />
        </div>
        <div className="face bottom">
          <Face03 />
        </div>
      </div>
    </div >
  );
}
