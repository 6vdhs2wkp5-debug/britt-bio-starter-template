// Everything recruiters see on the site comes from this file.
// Source: Brittany_Helm_Resume_2026 (online version). Keep the two in sync.

export const PROFILE = {
	name: 'Brittany Helm',
	title: 'Executive Assistant · Office Manager',
	location: 'San Francisco, CA',
	email: 'Brittany.helm92@gmail.com',
	linkedin: 'https://www.linkedin.com/in/brittany-helm345',
	resume: '/Brittany-Helm-Resume.pdf',
	headshot: '/photos/headshot-square-640.webp',
	headshotSmall: '/photos/headshot-square-320.webp',
	portrait: '/photos/headshot-portrait-720.webp',
	summary:
		'Executive Assistant with 8 years of experience supporting partners and senior investment leaders at private equity and venture capital firms in San Francisco. Skilled in complex calendar management, international travel, investor relations and office operations, with a reputation for sound judgment, discretion and anticipating executive needs.',
};

export const STATS = [
	{ value: '8 years', label: 'supporting partners at PE and VC firms' },
	{ value: '$1B+', label: 'fundraise I helped support at Owl Ventures' },
	{ value: '6', label: 'investment leaders I supported at once at CVC' },
	{ value: '3× a week', label: 'partner calendars checked by a workflow I built' },
];

export const STRENGTHS = [
	{
		title: 'Calendars that hold up',
		body: 'Busy, multi-time-zone calendars for partners and deal teams. I catch the conflicts and prep gaps before they turn into problems.',
	},
	{
		title: 'Travel and events',
		body: 'Investor meetings, advisory boards, offsites and group travel, from booking the venue to running the day itself.',
	},
	{
		title: 'People who trust me',
		body: 'Portfolio CEOs, LPs and board members know they can come straight to me, and that it will get handled.',
	},
	{
		title: 'An office that just works',
		body: 'I ran a 10-person office on my own: a move, vendors, IT, guests, lunches and the monthly invoices.',
	},
	{
		title: 'Smart about the busywork',
		body: 'I use AI for the repetitive checks, so my time goes to the people and the judgment calls.',
	},
	{
		title: 'Discreet, always',
		body: 'Sensitive deals, personal logistics, family plans. Executives trust me with all of it.',
	},
];

export interface Role {
	title: string;
	company: string;
	dates: string;
	highlights: string[];
	strengths: string[];
}

export const EXPERIENCE: Role[] = [
	{
		title: 'Executive Assistant',
		company: 'Centana Growth Partners',
		dates: 'Mar 2026 – Oct 2026',
		highlights: [
			'Supported a founding partner, a partner and their deal teams, and ran the firm-wide calendar. I was a go-to contact for portfolio CEOs, LPs and advisory board members.',
			'Planned the annual investor meeting, two advisory board meetings, three partner offsites and two company offsites, from vendors and budgets to running the day.',
			'Built AI workflows that check both partners’ calendars three times a week and match calendars to expenses every month.',
		],
		strengths: ['Event Planning', 'Calendar Management', 'Stakeholder Engagement', 'AI Workflow Design'],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'CVC Advisors',
		dates: 'Sep 2021 – Mar 2026',
		highlights: [
			'Supported six senior investment leaders at a fast-moving private equity firm, juggling competing priorities and sensitive matters.',
			'Owned their calendars across time zones and all of their travel, including visas and last-minute changes.',
			'Ran the 10-person West Coast office on my own across the Financial District and the Presidio, plus multi-currency expense reporting and the annual carbon-emissions report.',
		],
		strengths: ['Complex Calendaring', 'International Travel', 'Office Operations', 'Confidentiality'],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'Owl Ventures',
		dates: 'Sep 2018 – Jan 2021',
		highlights: [
			'Supported 3 employees through a $1B+ fundraise from LPs.',
			'Ran Diversity & Inclusion reporting across our portfolio CEOs and co-led the Education & Outcomes Report for LPs.',
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
			'Flew 300+ hours as Conflict Resolution Manager and Safety & Compliance Coordinator, after being selected for a program with under 1% acceptance.',
		],
		strengths: ['Conflict Resolution', 'Safety & Compliance', 'Leadership'],
	},
];

export interface Workflow {
	title: string;
	when: string;
	does: string[];
	result: string;
}

export const AI_WORKFLOWS: Workflow[] = [
	{
		title: 'Partner calendar check',
		when: 'Three times a week',
		does: [
			'Scans both partners’ calendars for conflicts',
			'Reviews recurring internal and external meetings, including 1:1s with portfolio CEOs',
			'Flags anything that needs a fix',
		],
		result: 'Issues get sorted before the partners ever see them.',
	},
	{
		title: 'Calendar-to-expense match',
		when: 'Once a month',
		does: [
			'Lines up each partner’s calendar with their logged expenses',
			'Spots anything missing or allocated to the wrong place',
		],
		result: 'More accurate allocations, and every expense gets reimbursed.',
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
