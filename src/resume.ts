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
	portrait: '/photos/headshot-portrait-720.webp',
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
	{ value: '8 years', label: 'of executive support and office management' },
	{ value: 'People first', label: 'caring about executives’ wellbeing, families and lives' },
	{ value: 'Custom AI', label: 'workflows designed and built for each partner' },
	{ value: 'Any size', label: 'thriving in small offices and global firms alike' },
];

export const STRENGTHS = [
	{
		title: 'Calendar management',
		body: 'Busy, multi-time-zone calendars for partners and deal teams, with conflicts and prep gaps caught before they become problems.',
	},
	{
		title: 'Travel and events',
		body: 'Investor meetings, advisory boards, offsites and group travel, managed from first booking through the day itself.',
	},
	{
		title: 'Trusted relationships',
		body: 'The first call for portfolio CEOs, LPs and board members, who know every request will be handled.',
	},
	{
		title: 'Office operations',
		body: 'Managed CVC Advisors’ 10-person West Coast office, from vendors, IT and guests to multi-currency expense reporting.',
	},
	{
		title: 'Processes & systems',
		body: 'Created and implemented processes and systems across firms, from expense reporting and onboarding to firm-wide calendars.',
	},
	{
		title: 'Discretion',
		body: 'Sensitive deals, personal logistics and family plans, all handled with complete confidentiality.',
	},
];

export interface Role {
	title: string;
	company: string;
	dates: string;
	highlights: string[];
	strengths: string[];
	featured?: string;
}

export const EXPERIENCE: Role[] = [
	{
		title: 'Executive Assistant',
		company: 'Centana Growth Partners',
		dates: 'Mar 2026 – Oct 2026',
		highlights: [
			'Supported a founding partner, a partner and their deal teams, and ran the firm-wide calendar. Served as a go-to contact for portfolio CEOs, LPs and advisory board members.',
			'Planned the annual investor meeting, two advisory board meetings, three partner offsites and two company offsites, from vendors and budgets to running the day.',
			'Designed and built AI workflows tailored to each partner, from calendar reviews to expense reconciliation.',
		],
		strengths: ['Event Planning', 'Calendar Management', 'Stakeholder Engagement', 'AI Workflow Design'],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'CVC Advisors',
		dates: 'Sep 2021 – Mar 2026',
		featured: 'Longest role · 4.5 years',
		highlights: [
			'Supported six senior investment leaders at a fast-moving private equity firm, balancing competing priorities and sensitive matters.',
			'Managed multi-time-zone calendars and all domestic and international travel, including visas and last-minute changes.',
			'Independently managed the 10-person West Coast office across the Financial District and the Presidio, and led multi-currency expense and annual carbon-emissions reporting.',
		],
		strengths: ['Complex Calendaring', 'International Travel', 'Office Operations', 'Confidentiality'],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'Owl Ventures',
		dates: 'Sep 2018 – Jan 2021',
		highlights: [
			'Supported a three-person team through a $1B+ fundraise from LPs.',
			'Ran Diversity & Inclusion reporting across portfolio CEOs and co-led the Education & Outcomes Report for LPs.',
			'Onboarded two new employees remotely and led company-wide expense reporting.',
		],
		strengths: ['Investor Relations', 'Data Analysis', 'Report Writing', 'Onboarding'],
	},
	{
		title: 'Executive Assistant',
		company: 'ClinCapture',
		dates: 'Jan 2018 – Sep 2018',
		highlights: [
			'Managed the CEO’s inbox and oversaw customer support tickets alongside the CTO.',
			'Coordinated conference and event logistics; supported hiring across all departments.',
		],
		strengths: ['Inbox Management', 'Recruiting', 'Conference Logistics'],
	},
	{
		title: 'Lead Flight Attendant',
		company: 'Virgin America',
		dates: 'Jul 2017 – Jan 2018',
		highlights: [
			'Flew 300+ hours as Conflict Resolution Manager and Safety & Compliance Coordinator.',
		],
		strengths: ['Conflict Resolution', 'Safety & Compliance', 'Leadership'],
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
			'Mapping each partner’s priorities, preferences and pain points',
			'Identifying the routine tasks best suited to AI',
		],
	},
	{
		step: '02',
		title: 'Build',
		points: [
			'Constructing workflows in Claude, ChatGPT and Copilot',
			'Covering calendar reviews, expense reconciliation, meeting prep and more',
		],
	},
	{
		step: '03',
		title: 'Set guidelines',
		points: [
			'Writing clear rules so every workflow runs consistently',
			'Reviewing results and refining as needs change',
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
