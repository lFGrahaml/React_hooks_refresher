import { useState } from 'react';
import './App.css';
import { PersonScore } from './PersonScore';

function App() {
  const [temp, setTemp] = useState(false);

  const tempHandler = () => {
    setTemp(true);
  }

    return (
      <div>
        <div> <PersonScore /> </div>

        <button onClick={tempHandler} aria-label='text generator'>
          text generator
        </button>

        {temp && (
          <div> some text </div>
        )}
      </div>
    );
}
export default App;