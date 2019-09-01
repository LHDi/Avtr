import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Piece from './Piece';

const colors = [
	'#f5c09b',
	'#fadbbc',
	'#f69777',
	'#f4a462',
	'#b94b25',
	'#86201b'
];
const shapes = ['0','1','2','3','4','5'];

const onColorChange = jest.fn(() => {});
const onShapeChange = jest.fn(() => {});

const config = {
	uid: 'test',
	shapes,
	colors,
	onShapeChange,
	onColorChange
};

describe('Testing Piece', () => {
	test('render with no error', () => {
		const { getByTitle } = render(<Piece config={config}/>);
		expect(getByTitle(colors[0])).toBeTruthy();
	});
	test('change the color', () => {
		const { getByTitle } = render(<Piece config={{...config, selectedColor: 2}}/>);

		const thirdColor = getByTitle(colors[2]);
		fireEvent.click(thirdColor);
		
		expect(thirdColor.firstElementChild.tagName).toBe('IMG');
	});
});
