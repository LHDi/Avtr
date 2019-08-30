import React, { useState } from 'react';
import ColorPicker, { colors } from './ColorPicker';
import ShapePicker from './ShapePicker';

export default function Body() {
	const [color, setColor] = useState(colors[0]);
	const changeColor = (color) => setColor((c) => (color));
	//const {color} = state;
	return (
		<div>
			<ShapePicker />
			<ColorPicker selected={color} handleClick={changeColor}/>
		</div>
	);
}
