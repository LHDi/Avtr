import React from 'react';
import PropTypes from 'prop-types';
import ShapePicker from '../ShapePicker';
import ColorPicker from '../ColorPicker/ColorPicker';
import Style from './Piece.module.css';
const Piece = ({config}) => {
	
	const {
		uid,
		shapes,
		colors,
		onShapeChange,
		onColorChange,
		selectedColor,
		selectedShape
	} = config;
	return (
		<div className={Style.container}>
			{shapes&& <ShapePicker selected={selectedShape||0} shapes={shapes||[]} select={onShapeChange||(()=>{})}/>}
			{colors&& <ColorPicker selected={selectedColor||0} colors={colors||[]} select={onColorChange||(()=>{})}/>}
		</div>
	);
};

Piece.propTypes = {
	config: PropTypes.shape({
		uid: PropTypes.string.isRequired,
		shapes: PropTypes.arrayOf(PropTypes.string),
		colors: PropTypes.arrayOf(PropTypes.string),
		onShapeChange: PropTypes.func,
		onColorChange: PropTypes.func,
		selectedColor: PropTypes.any,
		selectedShape: PropTypes.any
	}),
};

Piece.defaultProps = {
	config: {
		selectedColor: 0,
		selectedShape: 0
	}
};

export default Piece;
