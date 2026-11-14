// Everything recruiters see on the site comes from this file.
// Source: Brittany_Helm_Resume_2026 (online version). Keep the two in sync.

export const PROFILE = {
	name: 'Brittany Helm',
	title: 'Executive Assistant · Office Manager',
	location: 'San Francisco, CA',
	email: 'brittany@brittanyhelm.com',
	linkedin: 'https://www.linkedin.com/in/brittanyhelmsf',
	resume: '/Brittany-Helm-Resume.pdf',
	// Paste a Calendly or Google Calendar booking-page link here. While it's empty,
	// "Book a call" opens a pre-filled email instead.
	bookingUrl: 'https://cal.com/brittanyhelm/intro-call',
	headshot: '/photos/headshot-square-640.webp',
	headshotSmall: '/photos/headshot-square-320.webp',
	summary:
		'Executive Assistant with 8 years of experience supporting partners and senior investment leaders most recently at private equity firms in San Francisco. Skilled in complex calendar management, international travel, investor relations and office operations, with a reputation for sound judgment, discretion and anticipating executive needs.',
};

// Where every "Book a call" button points.
export const BOOK_CALL = {
	href:
		PROFILE.bookingUrl ||
		`mailto:${PROFILE.email}?subject=${encodeURIComponent("Let's set up a call")}&body=${encodeURIComponent(
			'Hi Brittany,\n\nI came across your website and would love to set up a quick call. A few times that work for me:\n\n',
		)}`,
	external: Boolean(PROFILE.bookingUrl),
};

export const STATS = [
	{ value: 'People first', label: 'caring about executives' },
	{ value: '8 years', label: 'of executive support' },
	{ value: 'Custom workflows', label: 'built for each partner' },
	{ value: 'Any size', label: 'small offices to global firms' },
];

export const STRENGTHS = [
	{
		title: 'Calendar management',
		body: 'Multi-time-zone calendars for partners and deal teams, with **conflicts caught early**.',
	},
	{
		title: 'Travel and events',
		body: '**Investor meetings**, advisory boards, offsites and travel, from first booking to the day itself.',
	},
	{
		title: 'Trusted relationships',
		body: 'A **go-to contact** for portfolio CEOs, LPs and board members.',
	},
	{
		title: 'Office operations',
		body: 'Managed CVC Advisors’ **West Coast** operations, from vendors to expenses.',
	},
	{
		title: 'Processes & systems',
		body: 'Created and implemented **processes and systems** across firms, from onboarding to expenses.',
	},
	{
		title: 'Discretion',
		body: 'Sensitive deals and family plans, handled with **complete confidentiality**.',
	},
];

export interface Role {
	title: string;
	company: string;
	dates: string;
	highlights: string[];
	featured?: string;
}

export const EXPERIENCE: Role[] = [
	{
		title: 'Executive Assistant',
		company: 'Centana Growth Partners',
		dates: 'Mar 2026 – Oct 2026',
		highlights: [
			'Supported a **founding partner, a partner and their deal teams**, and ran the firm-wide calendar.',
			'Planned the **annual investor meeting**, two advisory board meetings and five offsites.',
			'Built **custom AI workflows** for each partner.',
		],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'CVC Advisors',
		dates: 'Sep 2021 – Mar 2026',
		featured: 'Longest role · 4.5 years',
		highlights: [
			'Supported **six senior investment leaders** at a fast-moving private equity firm.',
			'Managed complex calendars and **international travel**, including visas and last-minute changes.',
			'**Independently managed West Coast operations** and multi-currency expense reporting.',
		],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'Owl Ventures',
		dates: 'Sep 2018 – Jan 2021',
		highlights: [
			'Supported a three-person team through a **$1B+ fundraise**.',
			'Co-led the **Education & Outcomes Report** for LPs and ran Diversity & Inclusion reporting.',
			'Onboarded new hires remotely and led company-wide expense reporting.',
		],
	},
	{
		title: 'Executive Assistant',
		company: 'ClinCapture',
		dates: 'Jan 2018 – Sep 2018',
		highlights: [
			'Managed the **CEO’s inbox** and oversaw customer support with the CTO.',
			'Coordinated **conferences and events** and supported hiring.',
		],
	},
	{
		title: 'Lead Flight Attendant',
		company: 'Virgin America',
		dates: 'Jul 2017 – Jan 2018',
		highlights: [
			'Flew **300+ hours** leading conflict resolution and safety.',
		],
	},
];

export interface Workflow {
	step: string;
	title: string;
	points: string[];
}

// How Brittany approaches AI workflows: general, not tied to one firm.
export const AI_WORKFLOWS: Workflow[] = [
	{
		step: '01',
		title: 'Design',
		points: [
			'Mapping each partner’s **priorities and pain points**',
			'Spotting routine tasks suited to AI',
		],
	},
	{
		step: '02',
		title: 'Build',
		points: [
			'Workflows in **Claude, ChatGPT and Copilot**',
			'Calendar reviews, expenses, meeting prep and more',
		],
	},
	{
		step: '03',
		title: 'Set guidelines',
		points: [
			'Clear rules so every workflow **runs consistently**',
			'Refining as needs change',
		],
	},
];

export const TOOLS = {
	AI: ['Claude', 'ChatGPT', 'Copilot'],
	Systems: [
		'Microsoft 365',
		'Outlook',
		'Excel',
		'PowerPoint',
		'Teams',
		'Zoom',
		'Slack',
		'Dropbox',
		'Adobe',
		'Concur',
		'Expensify',
		'Salesforce',
	],
};

export const EDUCATION = {
	school: 'Washington State University',
	degree: 'BA, Humanities',
	note: 'D1 Cheerleading Captain',
	dates: '2013 – 2017',
};

// Turns **phrase** into a highlighted <strong>phrase</strong> for the page.
export function hl(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
