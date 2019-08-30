import React from 'react';
import Preview from './Preview';
import Styles from './container.module.css';
import Face from './Face';
import FHair from './FHair';
import Hair from './Hair';
import Body from './Body';
import Color from './Color';

function Container() {
	return (
		<div className={Styles.container}>
			<Preview />
			<Face />
			<FHair />
			<Hair />
			<Body />
			<Color />
		</div>
	);
}

export default Container;
