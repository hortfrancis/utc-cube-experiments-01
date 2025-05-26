import { useState } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import Cube01 from './components/Cube01/Cube01';


function App() {

  const defaultDisplay = 'cube-01';

  const [display, setDisplay] = useState<string>(defaultDisplay);

  function handleControlsOnClick(value: string) {
    console.log(`Button clicked: ${value}`);
    setDisplay(value);
  }

  return (
    <>
      <Controls onClick={handleControlsOnClick} />
      {display === 'cube-01' && <Cube01 />}
    </>
  )
}

export default App;
