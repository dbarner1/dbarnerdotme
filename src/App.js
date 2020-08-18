import React, { useState } from 'react';
import { CONSTANTS } from './constants';
import Home from './Home.js';
import HeaderNavigation from './HeaderNavigation.js';
import LongBits from './LongBits';
import DraftBits from './DraftBits';
import ShortBits from './ShortBits';
import './App.css';

function App() {
  const INITIAL_ROUTE = CONSTANTS.DRAFT_BITS;
  const [currentPage, setCurrentPage] = useState(INITIAL_ROUTE);

  return (
    <div className="App">
      <div className="global-wrapper">
        <HeaderNavigation setCurrentPage={setCurrentPage} />
        {currentPage === CONSTANTS.HOME && <Home  />}
        {currentPage === CONSTANTS.LONG_BITS && <LongBits />}
        {currentPage === CONSTANTS.SHORT_BITS && <ShortBits />}
        {currentPage === CONSTANTS.DRAFT_BITS && <DraftBits />}
      </div>
    </div>
  );
}

export default App;
