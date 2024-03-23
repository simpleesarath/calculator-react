/*it's the main component of the application*/
import React, { useState , useEffect } from 'react';  //importing useState n useEffect hooks
import './App.css';                                   //importing style sheet


// uses state to keep track of the current value input by the user.
function App() {
  
  const [value, setValue] = useState('');  // This line initializes the state with the value of an empty string.

  const handleEqualClick = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue('Error!');
    }
  }
  const [showInitialText, setShowInitialText] = useState(true);

  useEffect(() => {
    if (showInitialText) {
      const timer = setTimeout(() => {
        setShowInitialText(false);
      }, 2000);                 // Display initial text in seconds
      return () => clearTimeout(timer);
    }
  }, [showInitialText]);


  // The return statement returns the JSX that renders the calculator.
  return (
    <div className="container">
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            {/* This input displays the current value. */}
            {/* <input className="disp" type='text' value={value}/> */}
            {/* <input className="disp" type='text' value={value} readOnly /> */}
            {showInitialText ? (
            <input className="disp" type='text' value='Hello!' readOnly />
          ) : (
            <input className="disp" type='text' value={value} readOnly />
          )}
          </div>
         <div className='butns-wrap'>
         <div>
            {/* The 'AC' button sets the value to an empty string. */}
            <input type='button' value='AC' onClick={e => setValue('')}/>
            {/* The 'DEL' button removes the last character from the value. */}
            {/* <input type='button' value='DEL' onClick={e => setValue(value.slice(0,-1))}/> */}
            <input type='button' value='DEL' onClick={e => value.length > 0 && setValue(value.slice(0,-1))}/>

            {/* The '.' button appends the '.' character to the value. */}
            <input className='op-btn' type='button' value='.' onClick={e => setValue(value + e.target.value)}/>
            {/* The '+' button appends the '+' character to the value. */}
            <input className='op-btn' type='button' value='+' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            {/* These buttons append the respective number to the value. */}
            <input type='button' value='7' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='8' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='9' onClick={e => setValue(value + e.target.value)}/>
            {/* The '-' button appends the '-' character to the value. */}
            <input  className='op-btn' type='button' value='-' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            {/* These buttons append the respective number to the value. */}
            <input type='button' value='4' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='5' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='6' onClick={e => setValue(value + e.target.value)}/>
            <input className='op-btn' type='button' value='*' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            {/* These buttons append the respective number to the value. */}
            <input type='button' value='1' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='2' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='3' onClick={e => setValue(value + e.target.value)}/>
            {/* The '-' button appends the '+' character to the value. */}
            <input className='op-btn' type='button' value='/' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='00' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='0' onClick={e => setValue(value + e.target.value)}/>
            <input className="op-btn" id='equal' type='button' value='='  onClick={handleEqualClick}/>
          </div>
         </div>
        </form>
      </div>
    </div>
  );
}

export default App;
