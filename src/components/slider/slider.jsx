import React, { useState } from 'react';
import '../../styles/slider.scss';


function RangeSlider(props) {
  const [value, setValue] = useState(props.defaultValue || props.min);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div className="range-slider">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={value}
        onChange={handleChange}
      />
      <div className="slider-value">{value/100}</div>
    </div>
  );
}

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="App">
      <RangeSlider
        min={0}
        max={100}
        defaultValue={50}
        onChange={handleSliderChange}
      />
    </div>
  );
}
