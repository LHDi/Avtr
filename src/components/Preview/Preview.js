import React, { useContext, useState, useEffect, useRef } from 'react';
import Styles from './preview.module.css';
import { AvatarStore } from '../Container/Container';
import CreateColoredSkinSvg from '../../utils/createColoredSkinSvg';
import CreateColoredBackgroundSvg from '../../utils/createColoredBackgroundSvg';

const GetSvgFromUrl = ({url}) => {
	let [Svg, setSvg] = useState('');
	useEffect(() => {
		fetch(url)
			.then(res => res.text())
			.then(svg => {
				setSvg(svg);				
			});
	});
	return <svg dangerouslySetInnerHTML={{'__html': Svg}}/>;
};
export default function Preview() {
	const Svg = useRef(null);
	const {avatar, avatar: {Skin, Background}} = useContext(AvatarStore);
	const parts = [], old = {};
	let i = 0;
	for (const uid in avatar) {
		if (avatar.hasOwnProperty(uid)) {			
			if(!!avatar[uid].shape ) {
				parts.push(<GetSvgFromUrl key={uid + avatar[uid].shape} url={'avatars/' + uid + '/' + avatar[uid].shape + '.svg'}/>);
				old[uid] = {shape: avatar[uid].shape, index: i++};
			}
		}
	}
	const triggerDownload = (imgURI) => {
		var evt = new MouseEvent('click', {
			view: window,
			bubbles: false,
			cancelable: true
		});
	
		var a = document.createElement('a');
		a.setAttribute('download', 'avtr.png');
		a.setAttribute('href', imgURI);
		a.setAttribute('target', '_blank');
	
		a.dispatchEvent(evt);
	};
	const handleClick = () => {		
		var canvas = document.createElement('canvas');
		canvas.width = 150;
		canvas.height = 150;

		var ctx = canvas.getContext('2d');
		var data = (new XMLSerializer()).serializeToString(Svg.current);
		var DOMURL = window.URL || window.webkitURL || window;
	
		var img = new Image();
		var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
		var url = DOMURL.createObjectURL(svgBlob);
		
		img.onload = function () {			
			ctx.drawImage(img, 0, 0);
			DOMURL.revokeObjectURL(url);
	
			var imgURI = canvas
				.toDataURL('image/png')
				.replace('image/png', 'image/octet-stream');
			
			triggerDownload(imgURI);
		};
		img.src = url;
	};
	return (
		<div className={Styles.preview} onClick={handleClick}>
			<svg ref={Svg} viewBox="0 0 64 64">
				<svg>
					<CreateColoredBackgroundSvg color={Background.color} />
					<CreateColoredSkinSvg color={Skin.color}/>
				</svg>
				{parts}
			</svg>
		</div>
	);
}
