/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		tools: {
			'Analytics Database (OLAP)': [
				{
					name: 'Tinybird',
					logo: '',
					url: 'https://www.tinybird.co/',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'ClickHouse',
					logo: '',
					url: 'https://clickhouse.com/',
					pros: [],
					cons: [],
					foss: true
				}
			],
			'Transactional Database (OLTP)': [
				{
					name: 'PlanetScale',
					logo: '',
					url: 'https://planetscale.com/',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'Tigris',
					logo: '',
					url: 'https://www.tigrisdata.com/',
					pros: [],
					cons: [],
					foss: false
				}
			],
			'Search Index': [
				{
					name: 'Tigris',
					logo: '',
					url: 'https://www.tigrisdata.com/',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'meilisearch',
					logo: '',
					url: 'https://www.meilisearch.com/',
					pros: [],
					cons: [],
					foss: true
				}
			],
			'NoSQL/Document Database': [
				{
					name: 'Tigris',
					logo: '',
					url: 'https://www.tigrisdata.com/',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'MongoDB',
					logo: '',
					url: 'https://www.mongodb.com/',
					pros: [],
					cons: [],
					foss: false
				}
			],
			'Web Analytics': [
				{
					name: 'Fathom',
					logo: '',
					url: 'https://usefathom.com/',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'BeamAnalytics',
					logo: '',
					url: 'https://beamanalytics.io/',
					pros: [],
					cons: [],
					foss: false
				}
			],
			'Password Management': [
				{
					name: 'BitWarden',
					logo: '',
					url: 'https://bitwarden.com/',
					pros: [],
					cons: [],
					foss: true
				},
				{
					name: '1Password',
					logo: '',
					url: 'https://1password.com/',
					pros: [],
					cons: [],
					foss: false
				}
			],
			'Frontend hosting/deployment': [
				{
					name: 'Vercel',
					logo: '',
					url: 'https://vercel.com',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'Netlify',
					logo: '',
					url: 'https://www.netlify.com/',
					pros: [],
					cons: [],
					foss: false
				}
			],
			'Cloud Vendor': [
				{
					name: 'GCP',
					logo: '',
					url: 'https://cloud.google.com/',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'AWS',
					logo: '',
					url: 'https://aws.amazon.com/',
					pros: [],
					cons: [],
					foss: false
				}
			],
			'Frontend Framework (Apps)': [
				{
					name: 'NextJS',
					logo: '',
					url: 'https://nextjs.org/',
					pros: [],
					cons: [],
					foss: true
				},
				{
					name: 'SvelteKit',
					logo: '',
					url: 'https://kit.svelte.dev/',
					pros: [],
					cons: [],
					foss: true
				}
			],
			'Documentation Framework': [
				{
					name: 'Docusaurus',
					logo: '',
					url: 'https://docusaurus.io/',
					pros: [],
					cons: [],
					foss: true
				},
				{
					name: 'Nextra',
					logo: '',
					url: 'https://nextra.site/',
					pros: [],
					cons: [],
					foss: true
				}
			],
			'Documentation Language': [
				{
					name: 'Markdown',
					logo: '',
					url: 'https://www.markdownguide.org/',
					pros: [],
					cons: [],
					foss: true
				},
				{
					name: 'AsciiDoc',
					logo: '',
					url: 'https://asciidoc.org/',
					pros: [],
					cons: [],
					foss: true
				}
			],
			'Data Warehouse': [
				{
					name: 'BigQuery',
					logo: '',
					url: 'https://cloud.google.com/bigquery',
					pros: [],
					cons: [],
					foss: false
				},
				{
					name: 'Snowflake',
					logo: '',
					url: 'https://www.snowflake.com/',
					pros: [],
					cons: [],
					foss: false
				}
			]
		}
	};
}
