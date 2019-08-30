import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Body from './Body';
import { colors } from './ColorPicker';

describe('Testing Body', () => {
	test('render with no error', () => {
		const { getByTitle } = render(<Body />);
		expect(getByTitle(colors[0])).toBeTruthy();
	});
	test('change the color', () => {
		const { getByTitle } = render(<Body />);

		const thirdColor = getByTitle(colors[2]);
		fireEvent.click(thirdColor);
		
		expect(thirdColor.firstElementChild.tagName).toBe('IMG');
	});
});
