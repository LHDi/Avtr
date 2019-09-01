import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Style = {
	container: {
		background: '#fff',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: '3px'
	}
};
// eslint-disable-next-line react/prop-types
const Shape = ({index, total, hidden}) => (
	
	<span style={{
		position: 'absolute',
  	width: '80px',
  	height: '80px',
  	left: '0px',
  	top: '0px',
		background: '#999',
		transform: `rotateY(${(360/total)*index}deg) translateZ(${80/(2*Math.tan(360/total))}px)`,
		textAlign: 'center',
		transition: 'all 1s',
		lineHeight: '80px',
		opacity: hidden? 0:1

	}}>{index}</span>
);

const setShapes = (shapes, selected) => (
	//shapes[selected]
	shapes.map((s, i) =>(<Shape hidden={i!==selected} index={i} total={shapes.length} key={i}/>))
);

// eslint-disable-next-line react/prop-types
export default function ShapePicker({shapes, select}) {
	const [selected, setSelected] = useState(0);
	const next = (e) => {
		setSelected((s) => (s+1)%shapes.length);
		select(selected);
	};
	const prev = (e) => {
		setSelected((s) => (s-1+shapes.length)%shapes.length);
		select(selected);
	};
	return (
		<div style={Style.container}>
			<span style={{height: '80px', lineHeight: '80px'}}>
				<FaAngleLeft style={{verticalAlign: 'middle'}} cursor="pointer" onClick={prev} color="#0e1b2c" size="1.5em"/>
			</span>
			<div style={{
				width: '80px',
				height: '80px',
				position: 'relative',
				perspective: '1000px',
				overflow: 'hidden'
			}}>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						transformStyle: 'preserve-3d',
						transition: 'all .3s',
						transform: 'translateZ(-288px) rotateY(' + selected / shapes.length * -360 + 'deg)'
					}}>
					{setShapes(shapes, selected)}
				</div>
			</div>
			<span style={{height: '80px', lineHeight: '80px'}}>
				<FaAngleRight style={{verticalAlign: 'middle'}} cursor="pointer" onClick={next} color="#0e1b2c" height={80} size="1.5em"/>
			</span>
		</div>
	);
}
