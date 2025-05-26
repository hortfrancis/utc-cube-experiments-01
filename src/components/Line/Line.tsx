import React from 'react';
import './Line.css';

export interface Point {
  x: number;
  y: number;
}

export interface LineProps {
  // Array of points to create the line
  points: Point[];
  // Stroke color of the line
  color?: string;
  // Stroke width of the line
  strokeWidth?: number;
  // Should the line connect back to the first point?
  closed?: boolean;
  // Additional class name for the SVG element
  className?: string;
}

const Line: React.FC<LineProps> = ({
  points,
  color = '#000',
  strokeWidth = 2,
  closed = false,
  className = '',
}) => {
  // Need at least 2 points to draw a line
  if (!points || points.length < 2) {
    return null;
  }

  // Calculate viewBox dimensions based on points
  const xValues = points.map(p => p.x);
  const yValues = points.map(p => p.y);

  const minX = Math.min(...xValues);
  const minY = Math.min(...yValues);
  const maxX = Math.max(...xValues);
  const maxY = Math.max(...yValues);

  // Add padding to viewBox
  const padding = Math.max(strokeWidth * 2, 10);
  const viewBox = `${minX - padding} ${minY - padding} ${maxX - minX + padding * 2} ${maxY - minY + padding * 2}`;

  // Create SVG path data
  const pathData = points.length > 0
    ? `M ${points[0].x} ${points[0].y} ` +
    points.slice(1).map(point => `L ${point.x} ${point.y}`).join(' ') +
    (closed ? ' Z' : '')
    : '';

  return (
    <svg
      className={`line-component ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d={pathData}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default Line;