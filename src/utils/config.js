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
		onColorChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'Body',
		shapes: [
			'checkered',
			'round',
			'small',
			'square'
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'Eyes',
		shapes: [
			'glasses',
			'happy',
			'open',
			'sleepy',
			'sunglasses',
			'wink'
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'FacialHair',
		shapes: [
			'none',
			'goatee',
			'shadow',
			'soulpatch',
			'walrus',
			'mustacheBlack',
			'mustacheBlonde',
			'mustacheBrunette',
			'mustacheCopper',
			'mustacheGrey',
			'mustachePink',
			'mustacheRed',
			'mustacheTeal'
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'Hair',
		shapes: [
			'bald',
			'balding',
			'bigcurls',
			'bobbangs',
			'bobcut',
			'buncurls-black',
			'buzzcut',
			'curlybun',
			'curlyhightop',
			'extralong',
			'long',
			'pigtails',
			'shortcombover',
			'beanie',
			'bunundercut',
			'buzz',
			'fade',
			'hat',
			'mohawk',
			'shortcomboverchops',
			'sidebuzz',
			'straightbun'
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'Mouth',
		shapes: [
			'frown',
			'lips',
			'pacifier',
			'smile',
			'smirk',
			'surprise'
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'Nose',
		shapes: [
			'mediumround',
			'smallround',
			'wrinkles'
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	},
	{
		uid: 'Skin',
		colors: [
			'#f2ad9b',
			'#f3967e',
			'#e4a070',
			'#b16a5b',
			'#92594b',
			'#623d36',
		],
		onShapeChange: (color) => dispach('change color to ' + color),
	}
]);