// Photos used on the site, with the credit each license requires.
// All are from Wikimedia Commons under CC BY-SA 4.0; resized (and where noted, cropped
// or color-adjusted) for the web, which the license requires us to say.

export interface Photo {
	src: string; // 1920px WebP
	srcSmall: string; // 960px WebP
	width: number;
	height: number;
	alt: string;
	caption: string;
	author: string;
	authorUrl: string;
	sourceUrl: string;
	license: string;
	licenseUrl: string;
	changes: string;
}

const CC_BY_SA_4 = {
	license: 'CC BY-SA 4.0',
	licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
};

export const PHOTOS = {
	night: {
		src: '/photos/bay-night-1280.webp',
		srcSmall: '/photos/bay-night-960.webp',
		width: 1280,
		height: 720,
		alt: 'The western span of the Bay Bridge lit up at night over San Francisco Bay',
		caption: 'The Bay Bridge western span at night',
		author: 'Dllu',
		authorUrl: 'https://commons.wikimedia.org/wiki/User:Dllu',
		sourceUrl:
			'https://commons.wikimedia.org/wiki/File:San_Francisco_Bay_Bridge_Western_Span_at_night.jpg',
		...CC_BY_SA_4,
		changes: 'resized',
	},
	skyline: {
		src: '/photos/bay-skyline-1920.webp',
		srcSmall: '/photos/bay-skyline-960.webp',
		width: 1920,
		height: 400,
		alt: 'The Bay Bridge and the San Francisco skyline seen across the water',
		caption: 'The Bay Bridge and the skyline from the water',
		author: 'Steven Lek',
		authorUrl: 'https://commons.wikimedia.org/wiki/User:Tukka',
		sourceUrl: 'https://commons.wikimedia.org/wiki/File:Skyline_San_Francisco_2019_3.jpg',
		...CC_BY_SA_4,
		changes: 'cropped to a panorama, resized, contrast lifted',
	},
} satisfies Record<string, Photo>;
