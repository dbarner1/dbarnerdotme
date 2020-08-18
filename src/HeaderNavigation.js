import React from 'react';
import { CONSTANTS } from './constants';
import './App.css';

export default function (props) {
  return (
    <div>
      <button className="button" onClick={() => props.setCurrentPage(CONSTANTS.HOME)}>
        {CONSTANTS.HOME}
      </button>
      <button className="button" onClick={() => props.setCurrentPage(CONSTANTS.LONG_BITS)}>
        {CONSTANTS.LONG_BITS}
      </button>
      <button className="button" onClick={() => props.setCurrentPage(CONSTANTS.SHORT_BITS)}>
        {CONSTANTS.SHORT_BITS}
      </button>
      <button className="button" onClick={() => props.setCurrentPage(CONSTANTS.DRAFT_BITS)}>
        {CONSTANTS.DRAFT_BITS}
      </button>
    </div>
  );
}