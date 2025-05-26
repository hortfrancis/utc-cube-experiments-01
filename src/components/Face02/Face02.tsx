import './Face02.css';

type CellsType = {
  [key: number]: string;
} | undefined;

export default function Front01({ cells }: { cells?: CellsType }) {

  console.log('Face02 cells', cells);
  return (
    <div className='face02'>
      <div style={{ background: cells?.[1] }}></div>
      <div style={{ background: cells?.[2] }}></div>
      <div style={{ background: cells?.[3] }}></div>
      <div style={{ background: cells?.[4] }}></div>
      <div style={{ background: cells?.[5] }}></div>
      <div style={{ background: cells?.[6] }}></div>
      <div style={{ background: cells?.[7] }}></div>
      <div style={{ background: cells?.[8] }}></div>
      <div style={{ background: cells?.[9] }}></div>
    </div>
  );
}
