import React from 'react';
import { render, fireEvent, getByTitle } from '@testing-library/react';
import ColorPicker, {colors} from './ColorPicker';
import { handleClick } from './Body';

jest.mock('./Body', () => {
	return {
		//color: colors[0],
		handleClick: jest.fn((color) => {
			
		})
	};
});

describe('mocking the color picker', () => {
	beforeEach = () => {};
	test('should change the color with no problems', () => {
		const { getByTitle, rerender } = render(<ColorPicker handleClick={handleClick} selected={colors[5]} />);
		const sixthColor = getByTitle(colors[5]);
		const thirdColor = getByTitle(colors[2]);
		expect(sixthColor.firstElementChild.tagName).toBe('IMG');
		
		fireEvent.click(thirdColor);
		fireEvent.click(sixthColor);
		expect(handleClick).toHaveBeenNthCalledWith(1, colors[2]);
		expect(handleClick).toHaveBeenNthCalledWith(2, colors[5]);		
		rerender(<ColorPicker handleClick={handleClick} selected={colors[2]} />);

		expect(thirdColor.firstElementChild.tagName).toBe('IMG');

	});
	
});
