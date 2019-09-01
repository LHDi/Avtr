export default (dispach) => ([
	{
		uid: 'Background',
		colors: [
			'#93a7ff',
			'#070b28',
			'#a9e775',
			'#f8fbff',
			'#ff7a9a',
			'#b379f7',
			'#ff6674',
			'#89e6e4',
			'#fff',
			'#ffcc65'
		],
		shapes: [
			'#93a7ff',
			'#070b28',
			'#a9e775',
			'#f8fbff',
			'#ff7a9a',
		],
		onColorChange: (color) => dispach('change color to ' + color),
		selectedColor: '#93a7ff'
	},
]);