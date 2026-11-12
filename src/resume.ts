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
		'Executive Assistant with 8 years of experience supporting partners and senior investment leaders most recently at private equity firms in San Francisco. Skilled in complex calendar management, international travel, investor relations and office operations, with a reputation for sound judgment, discretion and anticipating executive needs.',
};

export const STATS = [
	{ value: '8 years', label: 'of executive support for partners and investment leaders' },
	{ value: '6 leaders', label: 'supported at once at a global private equity firm' },
	{ value: 'Custom AI', label: 'workflows designed and built for each partner' },
	{ value: 'Any size', label: 'from small offices to global firms' },
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
		title: 'AI workflows, made to fit',
		body: 'I design and build AI workflows around how each partner works, so routine tasks run smoothly and nothing slips.',
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
			'Designed and built AI workflows tailored to each partner, from calendar reviews to expense reconciliation.',
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
			'Learn how each partner works: priorities, preferences and pain points',
			'Pick the routine tasks worth handing to AI',
		],
	},
	{
		step: '02',
		title: 'Build',
		points: [
			'Construct workflows in Claude, ChatGPT and Copilot',
			'Cover calendar reviews, expense reconciliation, meeting prep and more',
		],
	},
	{
		step: '03',
		title: 'Set guidelines',
		points: [
			'Write clear rules so every workflow runs the same way each time',
			'Review the results and adjust as needs change',
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
