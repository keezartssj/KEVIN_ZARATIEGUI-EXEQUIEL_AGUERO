import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { EjeEffect } from './componentes/widgets/EjeUseEffect';
import EjeReducer from './componentes/widgets/EjeReducer';
import CheckBox from './componentes/widgets/CheckBox';
import RadioButton from './componentes/widgets/RadioButton';
import ButtonGroup from './componentes/widgets/ButtonGroup';
import Dropdown from './componentes/widgets/dropdown';
import InputDate from './componentes/widgets/ImputDate';
import InputSlider from './componentes/widgets/ImputSlider';
import InputTextarea from './componentes/widgets/ImputTextarea';
import InputText from './componentes/widgets/ImputText';



function App() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  const buttons = [
    { id: 1, label: 'Opción 1' },
    { id: 2, label: 'Opción 2' },
    { id: 3, label: 'Opción 3' },
  ];
  
   
  return (
    <div>
      <EjeEffect/>
      <EjeReducer/>
      <h2><center>Usted es?</center></h2>
      <center><CheckBox label="Hombre"/><CheckBox label="Mujer"/></center>
      
      <h2>Radio Button</h2>
      <RadioButton />
      <ButtonGroup
        buttons={buttons}
        selectedButton={selectedButton}
        onButtonClick={handleButtonClick}
      />
      <h2>Mi Aplicación</h2>
      <Dropdown />
      <h2>Selecciona una fecha:</h2>
      <InputDate />
      <h2>Valora esta App</h2>
      <InputSlider />
      <h2>Coloque Alguna Observación</h2>
      <InputTextarea />
      
      
    </div>
  );
}; 
export default App;