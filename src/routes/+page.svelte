<script lang="ts">
	import Accordian from '$lib/components/Accordian.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
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
			{#each Object.entries(data.tools).sort() as [cat, recs]}
				<tr>
					<td class="border-slate-200 border">{cat}</td>
					{#each recs as rec}
						<td class="border-slate-200 border text-center">
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
