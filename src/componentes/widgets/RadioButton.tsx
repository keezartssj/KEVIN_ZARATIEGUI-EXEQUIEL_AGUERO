import React, { useState } from 'react';

function RadioButton() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Opción 1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="Opción 2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="Opción 3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default RadioButton;
