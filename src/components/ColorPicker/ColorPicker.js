import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from './ColorPicker.module.css';

// eslint-disable-next-line react/prop-types
const Pickr = ({color, selected, handleClick}) => {

	const onClick = () => handleClick(color);
	return(
		<span className={Style.pickr}>
			<span
				onClick={onClick}
				title={color}
				style={{
					background: color,
					position: 'absolute',
					borderRadius: '3px',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '85%',
					height: '85%'
				}}>
				{selected && <img
					src="img/check-mark.svg"
					alt="checked"
					style={{width: '100%', height: '100%', padding: '3px', boxSizing: 'border-box'}}
				/>}
			</span>
		</span>
	);
};
const createPickrs = (selected, colors, handleClick) => {

	return(colors.map((color, i) => (
		<Pickr key={i} handleClick={handleClick} selected={(selected === color || selected === i)} color={color}/>
	)));
};
export default function ColorPicker({colors, selected, select}) {
	const [color, setColor] = useState(selected);
	const handleClick = (i) => {
		setColor(i);
		select(i);
	};
	return (
		<span style={{display: 'inline-block', background: '#fff', borderRadius: '3px'}}>
			<div className={Style.picker}>
				{createPickrs(color, colors, handleClick)}
			</div>
		</span>
	);
}

ColorPicker.propTypes = {
	selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	select: PropTypes.func.isRequired
};

ColorPicker.defaultProps = {
	selected: 0
};