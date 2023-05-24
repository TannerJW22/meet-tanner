import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	nextjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	graphql,
	postgresql,
	express,
	jdml,
	kha,
	sr,
	defiPilot,
	currCafe,
	emojiTwitter,
	tailbreeze,
} from "../assets";

export const navLinks = [
	{
		id: "portfolio",
		title: "Portfolio",
	},
	{
		id: "experience",
		title: "Experience",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "NodeJS",
		icon: nodejs,
	},
	{
		name: "React",
		icon: reactjs,
	},
	{
		name: "Redux",
		icon: redux,
	},
	{
		name: "NextJS",
		icon: nextjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "GraphQL",
		icon: graphql,
	},
	{
		name: "Express",
		icon: express,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "PostgreSQL",
		icon: postgresql,
	},
	{
		name: "Git",
		icon: git,
	},
];

const experiences = [
	{
		title: "Freelance Web Developer",
		company_name: "Kingston Hill Academy",
		icon: kha,
		iconBg: "#E6DEDD",
		date: "May 2022 to Present",
		points: [
			"In April 2023, spearheaded initial planning for Vezra, a Student Information Management System designed to fit their specific use case of a charter school with 260 students; it is in the early stages of active development.",
			"Vezra is a SaaS Platform that organizes student data, manages class rosters, tracks daily attendance, and more.",
			"Provided intermittent technical assistance such as maintaining the school website and troubleshooting computer issues.",
		],
	},
	{
		title: "Founder & Operator",
		company_name: "Santerre Resume",
		icon: sr,
		iconBg: "#E6DEDD",
		date: "Mar 2016 to Mar 2023",
		points: [
			"Built an online resume writing business that writes resumes, cover letters, and Linkedin profiles for diverse clientele.",
			"Managed a remote staff of 2 virtual assistants and processed up to 50 clients per month.",
			"Maintained quality internal/external communication standards via email, Slack, and daily phone conferences.",
		],
	},
	{
		title: "Assistant Restaurant Manager",
		company_name: "JDML Group",
		icon: jdml,
		iconBg: "#E6DEDD",
		date: "Oct 2009 to Feb 2016",
		points: [
			"Brought leadership to a group of high-volume restaurants doing over $3 million in combined annual revenue.",
			"Establishes action plans based on quantitative goals, routinely evaluating employee performance and progress.",
			"Provides wide-ranging human resource solutions including hiring, training, and oversight of managers.",
			"Maximized profitability across key performance indicators including food cost, labor cost, and guest satisfaction.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const vezra = {
	tags: [
		{
			name: "react",
			color: "blue-text-gradient",
		},
		{
			name: "nextjs",
			color: "green-text-gradient",
		},
		{
			name: "graphql",
			color: "pink-text-gradient",
		},
		{
			name: "apollo",
			color: "violet-text-gradient",
		},
		{
			name: "mikroORM",
			color: "blue-text-gradient",
		},
		{
			name: "mongodb",
			color: "green-text-gradient",
		},
		{
			name: "type-graphql",
			color: "pink-text-gradient",
		},

		{
			name: "tailwind",
			color: "violet-text-gradient",
		},
		{
			name: "typescript",
			color: "blue-text-gradient",
		},
	],
	images: [defiPilot, currCafe, emojiTwitter],
	prod_link: "",
	source_code_link: "https://github.com/TannerJW22/vezra",
};

const projects = [
	{
		name: "Curriculum Cafe",
		description:
			"A blog website in Nextjs that uses GraphQL and GraphCMS. Used graphql-request so I could compare it to Apollo Server and Prisma. Learned more about the implementation differences between CSR, SSR, SSG, and ISR.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "green-text-gradient",
			},
			{
				name: "graphql",
				color: "pink-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
			{
				name: "graphcms",
				color: "violet-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: currCafe,
		prod_link: "https://curriculum-cafe.vercel.app/",
		source_code_link: "https://github.com/TannerJW22/curriculum-cafe",
	},
	{
		name: "Emoji Twitter",
		description:
			"A Twitter clone in Nextjs that uses tRPC, Upstash, Prisma, and Clerk for authentication. Implemented loading state handlers in many places and learned to use Zod for validation.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "green-text-gradient",
			},
			{
				name: "trpc",
				color: "pink-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
			{
				name: "clerk",
				color: "violet-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "prisma",
				color: "blue-text-gradient",
			},
			{
				name: "postgresql",
				color: "violet-text-gradient",
			},
		],
		image: emojiTwitter,
		prod_link: "https://twitter-clone-livid-tau.vercel.app/",
		source_code_link: "https://github.com/TannerJW22/twitter-clone",
	},
	{
		name: "Defi-Pilot",
		description:
			"Built a serverless dashboard capable of consuming real API data from OpenLoot.com. Learned Tailwind and purposely implemented multiple forms of state management including useState, useContext, useReducer, and Redux/RTK.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "redux",
				color: "violet-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
		],
		image: defiPilot,
		prod_link: "https://tannerjw22.github.io/defi-pilot/",
		source_code_link: "https://github.com/TannerJW22/defi-pilot",
	},
	{
		name: "Tailbreeze",
		description:
			"Built and deployed a small NPM package that stringifies objects, providing an alternative way to organize and reuse Tailwind classes. Learned markdown to write a README, as well as how to ship an NPM package.",
		tags: [
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "npm",
				color: "pink-text-gradient",
			},
			{
				name: "markdown",
				color: "violet-text-gradient",
			},
		],
		image: tailbreeze,
		prod_link: "https://www.npmjs.com/package/tailbreeze?activeTab=readme",
		source_code_link: "https://github.com/TannerJW22/tailbreeze",
	},
];

export { technologies, experiences, testimonials, projects, vezra };
