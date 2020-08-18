import React from 'react';
import { draftBits } from './content/draftbits';
import './App.css';

export default function(props) {
  return(
    <>
      <h3>Draft Bits</h3>
      <div>
        {draftBits.map(contentBlock => {
          return (
            <div key={contentBlock} className="draftBitWrapper">
              <p className="draftBitText">{contentBlock}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}