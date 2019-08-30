import React from 'react';
import PropTypes from 'prop-types';

export const colors = [
	'#f5c09b',
	'#fadbbc',
	'#f69777',
	'#f4a462',
	'#b94b25',
	'#86201b'
];
const Style = {
	picker: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '200px',
		background: '#fff',
		padding: '5px'
	},
	pickr: {
		position: 'relative',
		width: '20px',
		height: '20px',
		borderRadius: '3px',
		border: '3px solid rgb(203, 214, 224)',
		margin: '5px 10%'
	}
};
// eslint-disable-next-line react/prop-types
const Pickr = ({color, selected, handleClick}) => {
	const onClick = () => handleClick(color);
	return(
		<span style={{...Style.pickr}}>
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
					src="/img/check-mark.svg"
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
export default function ColorPicker({colors, selected, handleClick}) {
	return (
		<div style={Style.picker}>
			{createPickrs(selected, colors, handleClick)}
		</div>
	);
}

ColorPicker.propTypes = {
	selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	colors: PropTypes.arrayOf(PropTypes.string),
	handleClick: PropTypes.func.isRequired
};

ColorPicker.defaultProps = {
	colors,
	selected: 0
};