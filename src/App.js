import './App.css';
import React, { useState, useEffect } from 'react';
import Jobs from './componentes/Jobs';

function App() {
  // first part of the page, it will call all the components
  return (
    <div className="App" >
      {/* first component to call it is Jobs */}
      <Jobs/>
    </div>
  );
}

export default App;
