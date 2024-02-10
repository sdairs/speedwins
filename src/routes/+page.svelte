<script>
	import Accordian from '$lib/components/Accordian.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="prose mt-24 mb-4 mx-4 md:mx-auto md:prose-md lg:prose-xl">
	<h1 class="text-center">🚀 Speed Wins 🚀</h1>

	<p>When you're building a new product, Speed Wins.</p>
	<p>
		It's easy to get stuck deciding which tools to use, and making bad choices that slow you down.
		These recomendations will let you start, and stay, fast.
	</p>
	<Accordian>
		<span slot="head">What is this?</span>
		<div slot="details">
			<p>
				When you're building a product, there's a bunch of decisions you're going to need to make.
				Some of those decisions will be unique to the product you are building, but many won't.
				There's a lot of tools out there and it can be hard to know which are the right ones...or,
				at least, which are the <i>wrong</i> ones.
			</p>
			<p>
				For a startup, the most important thing is moving fast. You need to build, release, and
				iterate fast. If you don't, you will (probably) lose.
			</p>
			<p>The tools recommended on this site follow these principals:</p>
			<ul>
				<li>
					<b>Keep it simple:</b> you've got enough to worry about already, don't make your life harder
				</li>
				<li>
					<b>New isn't always better:</b> many established tools are popular for a reason, but...
				</li>
				<li>
					<b>Sometimes new IS better:</b> don't ignore tools that genuinely change the game
				</li>
				<li>
					<b>Build on strong foundations:</b> migrations are a huge time sink and will stop you from
					shipping, but...
				</li>
				<li>
					<b>Don't chase perfection:</b> you'll never avoid migrations completely, so don't become paralysed
					by choice.
				</li>
			</ul>
			<p>Yep, some of those are contradictory. That's life.</p>
			<p>
				The point of this site is to skip the analysis-paralysis. None of these tools are perfect,
				but none of them are <i>wrong</i>.
			</p>
		</div>
	</Accordian>
	<Accordian>
		<span slot="head">Is this sponsored?</span>
		<div slot="details">
			<p>No, but it is opinionated. This site costs nothing to run, and makes no money.</p>
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
					<td class="border-slate-200 border text-center">
						<a href={recs[0].url} target="_blank">{recs[0].name}</a>
					</td>
					<td class="border-slate-200 border text-center">
						{#if recs.length == 1}
							-
						{:else}
							<a href={recs[1].url} target="_blank">{recs[1].name}</a>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="prose prose-m mt-24 mb-4 mx-4 md:mx-auto lg:prose-xl">
	<p>
		By <a href="https://alasdairb.com">Alasdair Brown</a>. Source on
		<a href="https://github.com/sdairs/speedwins">GitHub</a>.
	</p>
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
