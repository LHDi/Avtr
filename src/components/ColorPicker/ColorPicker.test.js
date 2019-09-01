import React from 'react';
import { render, fireEvent, getByTitle } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { handleClick } from '../Piece/Piece';

const colors = [
	'#f5c09b',
	'#fadbbc',
	'#f69777',
	'#f4a462',
	'#b94b25',
	'#86201b'
];

jest.mock('../Piece/Piece', () => {
	return {
		//color: colors[0],
		handleClick: jest.fn((color) => {
			
		})
	};
});

describe('mocking the color picker', () => {
	beforeEach = () => {};
	test('should change the color with no problems', () => {
		const { getByTitle, rerender } = render(<ColorPicker colors={colors} select={handleClick} selected={colors[5]} />);
		const sixthColor = getByTitle(colors[5]);
		const thirdColor = getByTitle(colors[2]);
		expect(sixthColor.firstElementChild.tagName).toBe('IMG');
		
		fireEvent.click(thirdColor);
		fireEvent.click(sixthColor);
		expect(handleClick).toHaveBeenNthCalledWith(1, colors[2]);
		expect(handleClick).toHaveBeenNthCalledWith(2, colors[5]);
		expect(sixthColor.firstElementChild.tagName).toBe('IMG');

	});
	
});
