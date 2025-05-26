import './Cube02.css';
import Face02 from '../Face02/Face02';

export default function Cube02() {


  return (
    <div className='scene-02'>
      <div className="cube-02">
        <div className="face front">
          <Face02 cells={{
            1: 'black',
            2: 'black',
            3: 'black',
            4: 'black',
            5: 'white',
            6: 'white',
            7: 'black',
            8: 'black',
            9: 'black',
          }} />
        </div>
        <div className="face left">
          <Face02 cells={{
            1: 'black',
            2: 'white',
            3: 'black',
            4: 'black',
            5: 'white',
            6: 'black',
            7: 'black',
            8: 'black',
            9: 'black',
          }} />
        </div>
        <div className="face back">
          <Face02 cells={{
            1: '#f00',
            2: '#0f0',
            3: '#00f',
            4: '#ff0',
            5: '#f0f',
            6: '#0ff',
            7: '#f80',
            8: '#08f',
            9: '#80f',
          }} />
        </div>
        <div className="face right">
          <Face02 />
        </div>
        <div className="face top">
          <Face02 cells={{
            1: 'black',
            2: 'black',
            3: 'black',
            4: 'white',
            5: 'black',
            6: 'white',
            7: 'white',
            8: 'black',
            9: 'white',
          }} />
        </div>
        <div className="face bottom">
          <Face02 />
        </div>
      </div>
    </div >
  );
}
