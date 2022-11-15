import React, { useState } from 'react';
import Characters from './Characters';
import Results from './Results';
import Search from './Search';

function App() {

  const [input, setInput] = useState('');

  const home = () => {
    setInput('');
  }

  return (
    <div className="container-fluid mt-4 px-0">
      <Search input={input} setInput={setInput}/>
      <div className="h1 ps-3 user-select-none" style={{cursor:'pointer'}} onClick={home}>API RICK Y MORTY</div>
      <div className="text-bg-dark p-5">
        {input ? <Results input={input} /> : <Characters />}
      </div>
    </div>
  );
}

export default App;
