import React from 'react';
import Characters from './components/Characters';

function App() {
  return (
    <div className='container-fluid mt-4 px-0'>
      <h1 className='text-center'>API RICK Y MORTY</h1>
      <div className='text-bg-dark p-5'>
        <Characters />
      </div>
    </div>
  );
}

export default App;
