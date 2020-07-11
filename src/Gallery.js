import React, { useState } from "react";
import PICTURES from "./data/pictures";
import {useDynamicTransition} from './hooks'

const SECONDS = 1000 ;
const MINDELAY = 1 * SECONDS;
const MININCREMENT = 1

function Gallery() {
  const [delay, setDelay] = useState(3 *SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({
    delay, increment, length: PICTURES.length
  });

  const updateDelay = event =>{
    const inputedDelay = Number(event.target.value)*SECONDS;
    setDelay(inputedDelay < MINDELAY ? MINDELAY : inputedDelay)
  }

  const updateIncrement = event =>{
    const inputedIncrement = Number(event.target.value);
    setIncrement(inputedIncrement < MININCREMENT ? MININCREMENT : inputedIncrement);
  }

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className='multiform'>
        <div>
          Gallery transition delay (in seconds):
          <input type='number' onChange={updateDelay}/>
        </div>
        <div>
          Gallery increment:
          <input type='number' onChange={updateIncrement}/>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
