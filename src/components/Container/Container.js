import React from 'react';
import Preview from '../Preview/Preview';
import Styles from './container.module.css';
import Piece from '../Piece/Piece';
import Configs from '../../utils/config';

const shapes = ['0','1','2','3','4','5'];
const colors = [
	'#f5c09b',
	'#fadbbc',
	'#f69777',
	'#f4a462',
	'#b94b25',
	'#86201b'
];

function Container() {
	return (
		<div className={Styles.container}>
			<Preview />
			<div style={{display: 'flex', justifyContent: 'center'}}>
				{
					Configs((i) => console.log(i)).map(i => <Piece config={i} key={i.uid}/>)
				}
			</div>
		</div>
	);
}

export default Container;
