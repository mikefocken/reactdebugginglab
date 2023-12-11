export function generateBookData() {
	const titles = [
		'Journey Through Time',
		'Mysteries of the Ocean',
		'Mountains Beyond',
		'Galaxies: Far and Beyond',
		'Desert Tales',
		'Life in Rainforests',
		'Secrets of the Night Sky',
		'Adventures Underground',
		'Cultures of the World',
		'Birds and Their Stories',
	];
	const authors = [
		'Ava Thompson',
		'Samuel Waters',
		'Lucy Everest',
		'Neil Cosmos',
		'Sara Mirage',
		'Jake Green',
		'Luna Star',
		'Terra Mole',
		'Anna Globe',
		'Faye Feather',
	];
	const dates = [
		'2022-05-14',
		'2018-09-21',
		'2019-01-03',
		'2020-11-27',
		'2017-07-08',
		'2021-03-16',
		'2019-06-19',
		'2020-02-25',
		'2016-04-15',
		'2018-10-09',
	];
	const pageCounts = [312, 487, 256, 529, 198, 402, 389, 315, 482, 276];

	return titles.map((title, index) => ({
		id: index + 1,
		title: title,
		author: authors[index],
		datePublished: dates[index],
		pages: pageCounts[index],
	}));
}
