import React, { useState, useEffect } from 'react';
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
const Shape = ({index, total, hidden, src, uid}) => {
	const [svg, setSvg] = useState('');
	useEffect(() => {
		fetch(src)
			.then(res => res.text())
			.then(svg => {
				setSvg(svg);
			});
	});
	
	return (
		<span style={{
			position: 'absolute',
			width: '64px',
			height: '64px',
			left: '0px',
			top: '0px',
			transform: `rotateY(${(360/total)*index}deg) translateZ(${64/(2*Math.tan(360/total))}px)`,
			transition: 'all .5s',
			opacity: hidden? 0:1

		}} dangerouslySetInnerHTML={{'__html': svg}}>
				
		</span>
	);
};
const setShapes = (shapes, selected, uid) => (
	//shapes[selected]
	shapes.map((s, i) =>(<Shape src={'avatars/' + uid + '/' + s + '.svg'} uid={uid} hidden={i!==selected} index={i} total={shapes.length} key={i}/>))
);

// eslint-disable-next-line react/prop-types
export default function ShapePicker({shapes, select, selectedShape, uid}) {
	// eslint-disable-next-line react/prop-types
	const selectedShapeIndex =  shapes.indexOf(selectedShape)!==-1?shapes.indexOf(selectedShape):0;
	const [selected, setSelected] = useState(selectedShapeIndex);
	const next = (e) => {
		setSelected((s) => {
			const next = (s+1)%shapes.length;
			select(shapes[next]);
			return next;
		});
	};
	const prev = (e) => {
		setSelected((s) => {
			const prev = (s-1+shapes.length)%shapes.length;
			select(shapes[prev]);
			return prev;
		});
	};
	return (
		<div style={Style.container}>
			<span style={{height: '64px', lineHeight: '64px'}}>
				<FaAngleLeft style={{verticalAlign: 'middle'}} cursor="pointer" onClick={prev} color="rgba(122, 137, 151, 0.8)" size="1.5em"/>
			</span>
			<div style={{
				width: '64px',
				height: '64px',
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
					{setShapes(shapes, selected, uid)}
				</div>
			</div>
			<span style={{height: '64px', lineHeight: '64px'}}>
				<FaAngleRight style={{verticalAlign: 'middle'}} cursor="pointer" onClick={next} color="rgba(122, 137, 151, 0.8)" height={80} size="1.5em"/>
			</span>
		</div>
	);
}
