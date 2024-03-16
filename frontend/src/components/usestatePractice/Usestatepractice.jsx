
import React, { useState } from 'react';

const Usestatepractice = () => {
  const [inputValue, setInputValue] = useState('');
  const [showpswrd,setShowpswrd]=useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConvertClick = () => {
    setInputValue(inputValue.toUpperCase());
  };
  const lowercase = () => {
    setInputValue(inputValue.toLowerCase());
  };
  const reset = () => {
    setInputValue('');
  };
  const showPassword=()=>{

    setShowpswrd(false)
    
  };


  return (
    <>
    <div className="main d-flex mt-5 gap-3 justify-content-center align-items-center">

<div className="btn btn-primary" onClick={lowercase}>
        Convert LowerCase
      </div>
      
      <div className="inpt">
        <input
          type={showpswrd?"password":"text"} 
          placeholder="Enter Your Name"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="btn btn-primary" onClick={handleConvertClick}>
        Convert UpperCase
      </div>
      <div className="btn btn-primary" onClick={reset}>
        Reset
      </div>
      <div className="btn btn-primary" onClick={showPassword}>
        show password
      </div>
     

    </div>
<h1 className='text-center mt-5'>{inputValue.split(" ").length} Words and {inputValue.length} Chracters</h1>
</>
  );
};

export default Usestatepractice;
