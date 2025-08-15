import { useState } from 'react';
import './App.css';
import { PersonScore } from './PersonScore';

function App() {
  const [temp, setTemp] = useState(false);

    return (
      <div>
        <div> <PersonScore /> </div>

        <button onClick={() => {setTemp(true);}} aria-label='text generator'>
          text generator
        </button>

        {temp && (
          <div> some text </div>
        )}
      </div>
    );
}
export default App;