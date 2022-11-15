import React, { useState } from 'react';
import Characters from './components/Characters';
import Search from './components/Search';

function App() {

  const [search, showSearch] = useState(false);

  return (
    <div className='container-fluid mt-4 px-0'>
      <Search />
      <h1 className='text-center'>API RICK Y MORTY</h1>
      <div className='text-bg-dark p-5'>
        <Characters />
      </div>
    </div>
  );
}

export default App;
