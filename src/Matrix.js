import React, {useState} from 'react';
import MATRIX_FRAMES from './data/matrix';
import { useDynamicTransition } from './hooks';

const minDelay = 10;
const minIncrement=1;
function Matrix(){

  const [delay, setDelay] = useState(500);
  const [increment, setIncrement] = useState(5);
  const index = useDynamicTransition({delay, increment, length:MATRIX_FRAMES.length})


  const updateDelay = event =>{
    const inputedDelay = Number(event.target.value);
    setDelay(inputedDelay < minDelay ? minDelay : inputedDelay)
  }

  const updateIncrement = event =>{
    const inputedIncrement = Number(event.target.value);
    setIncrement(inputedIncrement < minIncrement ? minIncrement : inputedIncrement);
  }

  return (
    <div className="Gallery">
      <img src={MATRIX_FRAMES[index]} alt="matrix-animation" />
      <div className='multiform'>
        <div>
          Frame transition delay (in seconds):
          <input type='number' onChange={updateDelay}/>
        </div>
        <div>
          Frame increment:
          <input type='number' onChange={updateIncrement}/>
        </div>
      </div>
    </div>
  ); 
}
export default Matrix;