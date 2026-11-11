// Everything recruiters see on the site comes from this file.
// Source: Brittany_Helm_Resume_2026 (online version). Keep the two in sync.

export const PROFILE = {
	name: 'Brittany Helm',
	title: 'Executive Assistant · Office Manager',
	location: 'San Francisco, CA',
	email: 'Brittany.helm92@gmail.com',
	linkedin: 'https://www.linkedin.com/in/brittany-helm345',
	resume: '/Brittany-Helm-Resume.pdf',
	summary:
		'Executive Assistant with 8 years of experience supporting partners and senior investment leaders at private equity and venture capital firms in San Francisco. Skilled in complex calendar management, international travel, investor relations and office operations, with a reputation for sound judgment, discretion and anticipating executive needs.',
};

export const STATS = [
	{ value: '8 yrs', label: 'supporting PE & VC partners and investment leaders' },
	{ value: '$1B+', label: 'LP fundraise supported at Owl Ventures' },
	{ value: '6', label: 'senior investment leaders supported at once at CVC' },
	{ value: '3× / week', label: 'AI-assisted partner calendar audits I designed' },
];

export const STRENGTHS = [
	{
		title: 'Executive & calendar management',
		body: 'High-volume, multi-time-zone calendars for partners and deal teams, with conflicts caught before they reach the executive.',
	},
	{
		title: 'Travel, events & board meetings',
		body: 'Investor meetings, advisory boards, partner offsites and multi-person international travel, from vendors to day-of coordination.',
	},
	{
		title: 'Investor & stakeholder relations',
		body: 'Trusted point of contact for portfolio company CEOs, limited partners and advisory board members.',
	},
	{
		title: 'Office operations',
		body: 'Ran a 10-person West Coast office end to end: relocation, vendors, IT, guests, catering and monthly invoicing.',
	},
	{
		title: 'AI-powered workflows',
		body: 'Builds repeatable workflows with Claude, ChatGPT and Copilot that audit calendars and reconcile expenses automatically.',
	},
	{
		title: 'Discretion & judgment',
		body: 'Handles sensitive matters, personal logistics and family coordination for executives with full confidentiality.',
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
			'Supported a founding partner, a partner and their deal teams; managed the company-wide calendar and served as a primary contact for portfolio CEOs, LPs and advisory board members.',
			'Planned the annual investor meeting, two advisory board meetings, three partner offsites and two company-wide offsites, owning vendors, itineraries, budgets and day-of coordination.',
			'Designed AI-assisted workflows that audit both partners’ calendars three times a week and reconcile calendars against logged expenses monthly, improving allocation accuracy and reimbursement.',
		],
		strengths: ['Event Planning', 'Calendar Management', 'Stakeholder Engagement', 'AI Workflow Design'],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'CVC Advisors',
		dates: 'Sep 2021 – Mar 2026',
		highlights: [
			'Delivered high-level support to 6 senior investment leaders in a fast-paced private equity environment, managing competing priorities and sensitive matters.',
			'Owned high-volume, multi-time-zone calendars and domestic and international travel, including visa processing and last-minute changes.',
			'Ran operations independently for a 10-person West Coast office across the Financial District and the Presidio; led multi-currency expense reporting and annual carbon-emissions reporting.',
		],
		strengths: ['Complex Calendaring', 'International Travel', 'Office Operations', 'Confidentiality'],
	},
	{
		title: 'Executive Assistant | Office Manager',
		company: 'Owl Ventures',
		dates: 'Sep 2018 – Jan 2021',
		highlights: [
			'Supported 3 employees through a $1B+ fundraise from LPs.',
			'Managed Diversity & Inclusion reporting across portfolio CEOs and co-led the LP-facing Education & Outcomes Report.',
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
			'Logged 300+ flight hours as Conflict Resolution Manager and Safety & Compliance Coordinator; selected from a program with under 1% acceptance.',
		],
		strengths: ['Conflict Resolution', 'Safety & Compliance', 'Leadership'],
	},
];

export const AI_WORKFLOWS = [
	{
		title: 'Partner calendar audit',
		body: 'Scans both partners’ calendars three times a week for conflicts and reviews recurring internal and external meetings, including 1:1s with portfolio CEOs, so issues are fixed before the partners ever see them.',
	},
	{
		title: 'Calendar-to-expense reconciliation',
		body: 'Monthly workflow that matches each partner’s calendar against logged expenses, improving allocation accuracy and making sure everything is fully reimbursed.',
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
