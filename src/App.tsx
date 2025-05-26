import { useState, useEffect } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import Cube01 from './components/Cube01/Cube01';
import Cube02 from './components/Cube02/Cube02';
import Cube03 from './components/Cube03/Cube03';
import Cube04 from './components/Cube04/Cube04';


function App() {

  const defaultDisplay = 'cube-01';

  const getInitialDisplay = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('display') || defaultDisplay;
  };

  const [display, setDisplay] = useState<string>(getInitialDisplay());

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('display', display);
    window.history.pushState({}, '', url);
  }, [display]);

  function handleControlsOnClick(value: string) {
    console.log(`Button clicked: ${value}`);
    setDisplay(value);
  }

  return (
    <>
      <Controls onClick={handleControlsOnClick} currentCube={display} />
      {display === 'cube-01' && <Cube01 />}
      {display === 'cube-02' && <Cube02 />}
      {display === 'cube-03' && <Cube03 />}
      {display === 'cube-04' && <Cube04 />}

    </>
  )
}

export default App;
