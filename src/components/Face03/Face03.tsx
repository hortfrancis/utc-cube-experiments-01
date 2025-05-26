import { useState, useEffect, useRef } from 'react';
import './Face03.css';
import urbanXRImage01 from '../../assets/urban-xr-01.png';
import Line from '../Line/Line';

export default function Front01() {

  const [linePoints, setLinePoints] = useState([
    { x: 50, y: 50 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
    { x: 0, y: 0 }
  ]);

  // Animation frame reference
  const animationFrameRef = useRef<number | null>(null);
  // Start time reference
  const startTimeRef = useRef<number | null>(null);
  // Duration of the animation in ms
  const animationDuration = 5000;

  useEffect(() => {
    // Animation function
    const animateLine = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      // Calculate progress (0 to 1)
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Animate the line points
      const newPoints = [
        {
          x: 50 + Math.sin(progress * Math.PI * 2) * 20,
          y: 50 + Math.cos(progress * Math.PI * 2) * 20
        },
        {
          x: 100 + Math.sin(progress * Math.PI * 2 + 1) * 15,
          y: Math.sin(progress * Math.PI * 4) * 30
        },
        {
          x: 100 + Math.cos(progress * Math.PI * 3) * 20,
          y: 100 + Math.sin(progress * Math.PI * 2) * 25
        },
        {
          x: Math.sin(progress * Math.PI * 2) * 30,
          y: 100 + Math.cos(progress * Math.PI * 3) * 10
        },
        {
          x: Math.cos(progress * Math.PI * 4) * 20,
          y: Math.sin(progress * Math.PI * 2) * 30
        }
      ];

      setLinePoints(newPoints);

      // Continue animation loop
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateLine);
      } else {
        // Reset for continuous loop
        startTimeRef.current = null;
        animationFrameRef.current = requestAnimationFrame(animateLine);
      }
    };

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animateLine);

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const lineStrokeWidth = 10;

  return (
    <div className='face03'>
      <div className='thing-01' />
      <div className='image-01'>
        <img src={urbanXRImage01} alt="Urban XR" />
      </div>
      <div className='text-01'>
        <span>VR smart cities!</span>
      </div>

      <div className='line-wrapper'>
        <Line points={linePoints} color='blue' strokeWidth={lineStrokeWidth} />
      </div>


    </div>
  );
}
