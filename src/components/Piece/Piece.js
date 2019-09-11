import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ShapePicker from '../ShapePicker';
import ColorPicker from '../ColorPicker/ColorPicker';
import Style from './Piece.module.css';
import { AvatarStore } from '../Container/Container';

const Piece = ({config}) => {
	const {avatar, setAvatar} = useContext(AvatarStore);
	const {
		uid,
		shapes,
		colors,
	} = config;
	const onShapeChange = (newShape) => {
		setAvatar({...avatar, [uid]: {...avatar[uid], shape: newShape}});
	};
	const onColorChange = (newColor) => {
		setAvatar({...avatar, [uid]: {...avatar[uid], color: newColor}});
	};
	return (
		<div className={Style.container}>
			{shapes&& <ShapePicker uid={uid} selectedShape={avatar[uid].shape || 0} shapes={shapes||[]} select={onShapeChange||(()=>{})}/>}
			{colors&& <ColorPicker uid={uid} selected={avatar[uid].color} colors={colors||[]} select={onColorChange||(()=>{})}/>}
			<h5
				style={{display: 'block', textAlign: 'center'}}
			>
				{uid}
			</h5>
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
