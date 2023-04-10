<script lang="ts">
	import Accordian from '$lib/components/Accordian.svelte';

	const tools = {
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
				name: 'RockSet',
				logo: '',
				url: 'https://rockset.com/',
				pros: [],
				cons: [],
				foss: false
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
				foss: false
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
				name: '',
				logo: '',
				url: '',
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
				foss: false
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
		'Cloud vendor': [
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
				foss: false
			},
			{
				name: 'SvelteKit',
				logo: '',
				url: 'https://kit.svelte.dev/',
				pros: [],
				cons: [],
				foss: false
			}
		],
		'Documentation Framework': [
			{
				name: 'Docusaurus',
				logo: '',
				url: 'https://docusaurus.io/',
				pros: [],
				cons: [],
				foss: false
			},
			{
				name: 'Nextra',
				logo: '',
				url: 'https://nextra.site/',
				pros: [],
				cons: [],
				foss: false
			}
		],
		'Documentation Language': [
			{
				name: 'Markdown',
				logo: '',
				url: 'https://www.markdownguide.org/',
				pros: [],
				cons: [],
				foss: false
			},
			{
				name: 'AsciiDoc',
				logo: '',
				url: 'https://asciidoc.org/',
				pros: [],
				cons: [],
				foss: false
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
	};

	// const ordered_tools = Object.keys(tools).sort();
</script>

<div class="prose mt-24 mb-4 mx-4 md:mx-auto md:prose-md lg:prose-xl">
	<h1 class="text-center">Speed Wins</h1>

	<p>When you're building a new product, Speed Wins.</p>
	<p>
		It's easy to get stuck deciding which tools to use, and making bad choices that slow you down.
		These recomendations will let you start, and stay, fast.
	</p>
	<Accordian>
		<span slot="head">Tell me more...</span>
		<div slot="details">
			<p>These are the details.</p>
		</div>
	</Accordian>
	<Accordian>
		<span slot="head">Is this sponsored?</span>
		<div slot="details">
			<p>No. This site costs nothing to run, and makes no money.</p>
		</div>
	</Accordian>

	<table class="border-collapse border-slate-200">
		<thead>
			<tr>
				<th>Category</th>
				<th>#1</th>
				<th>#2</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.entries(tools).sort() as [cat, recs]}
				<tr>
					<td class="border border-slate-200 border-2">{cat}</td>
					{#each recs as rec}
						<td class="border border-slate-200 border-2 text-center">
							<a href={rec.url} target="_blank">{rec.name}</a>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="postcss">
	td:first-child,
	th:first-child {
		border-left: none;
	}
	td:last-child,
	th:last-child {
		border-right: none;
	}
	tr:last-child {
		border-bottom: none;
	}
</style>
