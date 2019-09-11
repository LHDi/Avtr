import React , { createContext, useState } from 'react';
import Preview from '../Preview/Preview';
import Styles from './container.module.css';
import Piece from '../Piece/Piece';
import Configs from '../../utils/config';

const initialConfig = {
	Background: {
		color: '#93a7ff',
	},
	Body: {
		shape: 'checkered',
	},
	Eyes: {
		shape: 'glasses',
	},
	FacialHair: {
		shape: 'goatee',
	},
	Hair: {
		shape: 'bald',
	},
	Mouth: {
		shape: 'frown',
	},
	Nose: {
		shape: 'mediumround',
	},
	Skin: {
		color: '#f2ad9b',
	},
};
export const AvatarStore = createContext(initialConfig);

function Container() {
	const [avatar, setAvatar] = useState(initialConfig);
	
	return (
		<AvatarStore.Provider value={{avatar, setAvatar}} >
			<div className={Styles.container}>
				<Preview />
				<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
					{
						Configs((i) => console.log(i)).map(i => <Piece config={i} key={i.uid}/>)
					}
				</div>
			</div>
		</AvatarStore.Provider>
	);
}

export default Container;
